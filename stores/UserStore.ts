import { action, observable } from "mobx";
import { LoginModel } from "../models/login.model";
import { UserModel } from "../models/user.model";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKeysConstants } from "../constants/storageKeys.constants";

export class UserStore {
    @observable isUserLoggedIn: boolean = false;
    @observable userData: UserModel;
    
    private usersBase: UserModel[] = [];

    @action
    async toInitStore(): Promise<boolean>{
        await AsyncStorage.getItem(StorageKeysConstants.usersBase).then(res => this.usersBase = JSON.parse(res) || [])

        AsyncStorage.getItem(StorageKeysConstants.currentUser).then(savedUser => {
            if (savedUser) {
                this.isUserLoggedIn = true
                this.userData = JSON.parse(savedUser)
            }
        })


        return true
    }

    @action
    toLogOut(): void{
        this.isUserLoggedIn = false;
        this.userData = undefined;
        AsyncStorage.removeItem(StorageKeysConstants.currentUser)
    }

    @action
    toLogIn(data: LoginModel): boolean{
        const {login, password} = data,
            user = this.findUser(login, password);

        if (user) {
            this.userData = user
            AsyncStorage.setItem(StorageKeysConstants.currentUser, JSON.stringify(user))
            this.isUserLoggedIn = true

            return true
        } else {
            return false
        }
    }

    
    @action
    toUpdateProfilePicture(picture: string): void{
        this.userData.profilePicture = picture;

        this.usersBase[this.userData.id] = this.userData

        AsyncStorage.setItem(StorageKeysConstants.usersBase, JSON.stringify(this.usersBase))
    }
    
    @action
    toCreateUser(user: UserModel): boolean{
        const {login, password} = user,
            isThereSuchUser = this.checkLogin(login);

        if (!isThereSuchUser) {
            user.id = this.usersBase.length + 1
            this.usersBase.push(user)
            AsyncStorage.setItem(StorageKeysConstants.usersBase, JSON.stringify(this.usersBase))

            return true
        }

        return false
    }

    private findUser(login: string, password: string): UserModel | null{
        return this.usersBase?.find((user: UserModel) => {
            const isMatch = login === user.login && password === user.password

            return isMatch
        })
    }

    private checkLogin(login: string): boolean{
        return !!this.usersBase?.find((user: UserModel) => {
            const isMatch = login === user.login

            return isMatch
        })
    }
}

export default new UserStore()
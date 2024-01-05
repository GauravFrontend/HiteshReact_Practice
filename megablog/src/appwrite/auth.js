import conf from "../conf/conf.js"

import { Clint, Account, ID } from "appwrite"


export class AuthService {
    client = new Clint();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, passward, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, passward, name);
            if (userAccount) {
                return this.login({ email, passward });
            } else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, passward }) {
        try {
            return await this.account.createEmailSession(email, passward);
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error
        }
        return null;
    }


    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default AuthService;
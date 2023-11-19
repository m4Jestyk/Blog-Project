import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
        
      if (userAccount) {
        //function calling (another)
        return this.login({email, password})
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({email, password}){
    try {
        return await this.account.createEmailSession(email, password);
    } catch (error) {
        throw error;
    }
  }

  async getCurrentUser() {
    try{
      const currentUser =  await this.account.get();
        if(currentUser){
            return currentUser;
        }
        else{
            return null;
        }
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: ERROR :",error);
    }
    return null;
  }

  async logout () {
    try {
        await this.account.deleteSessions('current');
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser :: ERROR ::",error);

    }
  }
}

const authService = new AuthService();

export default authService;

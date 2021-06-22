import firebase from '../config/firebase'

export default class NewFirebaseClient {

    async getAllNews() {
        const database = firebase.firestore();
        const data = await database.collection("news").get()

        let allNews = data.docs.map(doc => ({ ...doc.data(), uuid: doc.id }))

        return allNews
    }

    async getNewByUUID(uuid) {

        const database = firebase.firestore();
        const data = await database.collection("news").doc(uuid).get();

        if (data.exists) {
            let notice = { ...data.data(), uuid: data.id }
            return notice
        }
        else
            return false
    }
}
import { ObjectId } from "mongodb";

export default class Entry {
    constructor(public title: string, public date: string, public content: string, public id?: ObjectId) {}
}

import { ObjectId } from "mongodb";

export default class Content {
    constructor(public title: string, public date: string, public content: string, public id?: ObjectId) {}
}

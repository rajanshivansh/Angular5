import { User } from "../model/user";

export const USER_DATA : User[] = [ {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1963"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    votes : 120,
    image : "assets/images/bill.jpg"
},{
    firstName : "Steve",
    lastName : "Jobs",
    dob : new Date("Jan 2, 1963"),
    income : 0,
    isWorking : false,
    company : "Apple",
    votes : 180,
    image : "assets/images/steve.png"
},{
    firstName : "Tim B.",
    lastName : "Lee",
    dob : new Date("Feb 1, 1963"),
    income : 40000,
    isWorking : true,
    company : "World Wide Web",
    votes : 150,
    image : "assets/images/tim.jpg"
}]
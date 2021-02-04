import { FamilyCard } from './Card'

export class NewYorkMob extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'New York Mob',
        color = 'red'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'Dutch Shultz',
            'Frank Castello',
            'Meyer Lansky',
            'Vito Genovese',
            'Albert The Executioner Anastasia',
            'Benjamin Bugsy Siegel',
            'Joseph Joe Bananas Bonanno',
            'Joe Valachi',
            'Charles Lucky Luciano',
        ]
    }
}

export class MurderInc extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'Murder Inc',
        color = 'black'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'Harry Pittsburgh Phil Strauss',
            'Abraham Kid Twist Reles',
            'Irwing Knadles Nitzberg',
            'Frank The Dasher Abbendado',
            'Martin Bugsy Goldstein',
            'Harry Happy Maione',
            'Anthony The Duke Maffettore',
            'Albert Allie Tick Tock Tannenbaum',
            'Abraham Pretty Levine',
        ]
    }
}

export class PurpleGang extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'Purple Gang',
        color = 'purple'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'Samuel Sammy Purple Cohen',
            'Abe Axler',
            'Peter Licavoli',
            'Joseph Zerlli',
            'Harry Fleisher',
            'Louis Fleisher',
            'Benjamin Bernstein',
            'Joseph Bernstein',
            'Eddie Fletcher',
        ]
    }
}

export class MoranGang extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'Moran Gang',
        color = 'yellow'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'George Bugs Moran',
            'Al Weinshank',
            'Hymie Weiss',
            'Pete Gusenberg',
            'Frank Gusenberg',
            'James Clark',
            'John May',
            'Adam Heyer',
            'Willie Marks',
        ]
    }
}

export class BankRobbers extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'Bank Robbers',
        color = 'green'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'John Desperate Dan Dillinger',
            'Baby Face Nelson',
            'Kate Ma Barker',
            'Arthur Doc Barker',
            'Alvin Karpis',
            'Charles Pretty Boy Floyd',
            'George Machine Gun Kelly',
            'Clyde Barrow',
            'Bonnie Parker',
        ]
    }
}

export class CaponeMob extends FamilyCard {
    constructor(
        gangsterName = '',
        picture = '',
        gangsterFamily = 'Capone Mob',
        color = 'turquoise'
    ) {
        super(gangsterFamily, color)
        this.gangsterName = gangsterName
        this.picture = picture
        this.familyNames = [
            'Alphonse Scarface Al Capone',
            'Sam Golfbag Hunt',
            'Frank The Enforcer Nitti',
            'William Jack Three-Fingered Jack White',
            'Anthony Big Tuna Accardo',
            'Jacob Greatsy Thumb Guzik',
            'Paul The Waiter Ricca',
            'Jack Machine Gun Jack McGurn',
            'unnamed 9th',
        ]
    }
}

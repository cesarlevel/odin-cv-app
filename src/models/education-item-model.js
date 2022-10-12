export class EducationItemModel {
    constructor(name = '', title = '', dateStart = '', dateEnd = '') {
        this.name = name;
        this.title = title;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        
        return {
            name: this.name,
            title: this.title,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
        }
    }   
};

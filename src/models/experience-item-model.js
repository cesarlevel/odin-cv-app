export class ExperienceItemModel {
    constructor(company = '', position = '', description = '', dateStart = '', dateEnd = '') {
        this.company = company;
        this.position = position;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        
        return {
            company: this.company,
            position: this.position,
            description: this.description,
            dateStart: this.dateStart,
            dateEnd: this.dateEnd,
        }
    }   
};

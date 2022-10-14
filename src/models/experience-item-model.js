export class ExperienceItemModel {
    constructor(company = '', position = '', description = '', yearStart = '', yearEnd = '') {
        this.company = company;
        this.position = position;
        this.description = description;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        
        return {
            company: this.company,
            position: this.position,
            description: this.description,
            yearStart: this.yearStart,
            yearEnd: this.yearEnd,
        }
    }   
};

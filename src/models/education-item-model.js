export class EducationItemModel {
    constructor(institutionName = '', title = '', yearStart = '', yearEnd = '') {
        this.institutionName = institutionName;
        this.title = title;
        this.yearStart = yearStart;
        this.yearEnd = yearEnd;
        
        return {
            institutionName: this.institutionName,
            title: this.title,
            yearStart: this.yearStart,
            yearEnd: this.yearEnd,
        }
    }   
};

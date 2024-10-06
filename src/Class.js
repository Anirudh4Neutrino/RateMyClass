class Class {
    constructor(subject, usualGrade, prerequisite, duration, honorsAP, description, averageGrade, ratings = [], comments = []) {
        this.subject = subject;
        this.usualGrade = usualGrade;
        this.prerequisite = prerequisite;
        this.duration = duration; // 'semester' or 'year'
        this.honorsAP = honorsAP; // 'honors', 'AP', or 'none'
        this.description = description;
        this.averageGrade = averageGrade;
        this.ratings = ratings;
        this.comments = comments;
    }

    getAverageRating() {
        if (this.ratings.length === 0) return 0;
        const sum = this.ratings.reduce((acc, rating) => acc + rating, 0);
        return (sum / this.ratings.length).toFixed(2);
    }

    // Getters
    getSubject() { return this.subject; }
    getUsualGrade() { return this.usualGrade; }
    getPrerequisite() { return this.prerequisite; }
    getDuration() { return this.duration; }
    getHonorsAP() { return this.honorsAP; }
    getDescription() { return this.description; }
    getAverageGrade() { return this.averageGrade; }
    getRatings() { return this.ratings; }
    getComments() { return this.comments; }

    toJSON() {
        return JSON.stringify({
            subject: this.subject,
            usualGrade: this.usualGrade,
            prerequisite: this.prerequisite,
            duration: this.duration,
            honorsAP: this.honorsAP,
            description: this.description,
            averageGrade: this.averageGrade,
            averageRating: this.getAverageRating(),
            ratings: this.ratings,
            comments: this.comments
        }, null, 2); // Indent with 2 spaces for readability
    }
}

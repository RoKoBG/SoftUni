class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak] != Number(altitude)) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        } else {
            return `${peak} has already been added to your goals`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (!this.goals[peak]) {
            throw Error(`${peak} is not in your current goals`);
        } else if (this.resources <= 0) {
            throw Error("You don't have enough resources to start the hike");
        }
        let diff = Number(this.resources) - Number(time) * 10;

        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        }
        this.resources = Number(this.resources) - Number(time) * 10;
        this.listOfHikes.push({ peak, time, difficultyLevel });
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }

    rest(time) {
        this.resources = this.resources + time * 10;

        if (this.resources > +100) {
            this.resources = 100;
            return "Your resources are fully recharged. Time for hiking!";
        }
        return `You have rested for ${time} hours and gained ${
            time * 10
        }% resources`;
    }

    showRecord(criteria) {
        if (!this.listOfHikes.length) {
            return `${this.username} has not done any hiking yet`;
        }
        if (
            !this.listOfHikes.find((p) => p.difficultyLevel === criteria) &&
            criteria != "all"
        ) {
            return `${this.username} has not done any ${criteria} hiking yet`;
        }
        if (criteria === "all") {
            let arr = ["All hiking records:"];

            for (const hike of this.listOfHikes) {
                arr.push(
                    `${this.username} hiked ${hike.peak} for ${hike.time} hours`
                );
            }
            return arr.join("\n");
        }
        this.listOfHikes=this.listOfHikes.filter(p=>p.difficultyLevel===criteria);
        let best = this.listOfHikes.sort((a,b)=>a.localeCompare(b))[0];
        return `${this.username}'s best ${criteria} hike is ${best.peak} peak, for ${best.time} hours`
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

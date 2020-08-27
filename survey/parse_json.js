const fs = require('fs');
const csvHeader = 'id,shareConsent,contactMail,occupation,itWorkplace,knowledge,privacy,duration A0,duration A1,duration A2,duration A3,duration A4,duration A5';

function parseJSON(json) {
    let results = {};

    for (const entry of json.results) {
        results[entry.identifier] = entry;
    }

    const shareConsent = results['SharingConsentStep'].results[0].choiceAnswers[0];
    const contact = results['contactDetails'].results[0].textAnswer || '';

    const assignmentDurations = [0, 1, 2, 3, 4, 5]
        .map(x => results[`assignment-${x}`])
        .map(assignment => {
            const start = Date.parse(assignment.startDate);
            const end = Date.parse(assignment.endDate);
            const duration = end - start;
            return duration / 1000;
        });

    let rawDemographics = {};

    for (const entry of results['demographics'].results) {
        rawDemographics[entry.identifier] = entry;
    }

    const demographics = {
        occupation: rawDemographics.occupation.choiceAnswers[0],
        itWorkplace: rawDemographics.itWorkplace.booleanAnswer,
        knowledge: rawDemographics.knowledge.scaleAnswer,
        privacy: rawDemographics.privacy.scaleAnswer
    }

    return `${json.taskRunUUID},${shareConsent},${contact},${demographics.occupation},${demographics.itWorkplace},${demographics.knowledge},${demographics.privacy},${assignmentDurations.join(',')}`;
}


const path = process.argv[2];
const json = JSON.parse(fs.readFileSync(path, 'utf8'));

// console.log(csvHeader);
console.log(parseJSON(json));
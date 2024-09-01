export const aspects = [
    {
        title: "How many user complaints do we have?",
        type: "radio",
        options: [
            { value: "None", score: 0 },
            { value: "One", score: 3 },
            { value: "Few (2-3)", score: 6 }, 
            { value: "Many (3+)", score: 9 } 
        ]
    },
    {
        title: "Is it a first impression flow?",
        type: "dropdown",
        options: [
            { value: "No", score: 0 },
            { value: "Yes", score: 12 } 
        ]
    },
    {
        title: "What is the potential user impact?",
        type: "radio",
        options: [
            { value: "No users", score: 0 },
            { value: "One user", score: 4 }, 
            { value: "Multiple users", score: 7 },
            { value: "All users", score: 12 } 
        ]
    },
    {
        title: "How critical is the bug for the user business?",
        type: "radio",
        options: [
            { value: "No impact", score: 0 },
            { value: "Minor impact", score: 3 }, 
            { value: "Moderately critical", score: 6 }, 
            { value: "Highly critical", score: 12 } 
        ]
    },
    {
        title: "How complex is the fix?",
        type: "radio",
        options: [
            { value: "Complex (more than 1 day)", score: 0 },
            { value: "Moderate (up to 1 day)", score: 2 }, 
            { value: "Simple (up to 30 mins)", score: 6 },
            { value: "1 minute fix", score: 12 },
        ]
    },
    {
        title: "Is there a valid workaround?",
        type: "dropdown",
        options: [
            { value: "Yes, easy and natural workaround", score: 0 },
            { value: "Yes, but user needs specific tools/knowledge", score: 3 },
            { value: "Yes, but it would require employee involvement", score: 6 },
            { value: "No, no workaround", score: 10 }
        ]
    },
    {
        title: "Does it break a certain product flow blocking the user from achieving their goal?",
        type: "dropdown",
        options: [
            { value: "No, user can keep working", score: 0 },
            { value: "Yes, user is blocked", score: 12 } 
        ]
    },
    {
        title: "Does it disrupt the user experience, creating confusion or frustration?",
        type: "radio",
        options: [
            { value: "No disruption", score: 0 },
            { value: "Moderate disruption", score: 3 }, 
            { value: "Severe disruption", score: 8 } 
        ]
    },
    {
        title: "Is it absolutely clear for the user that there is a problem and what to do next?",
        type: "dropdown",
        options: [
            { value: "Yes (totally clear instructions)", score: 0 },
            { value: "Yes (user can guess)", score: 4 },
            { value: "No, user is stuck", score: 10 }
        ]
    },
    {
        title: "Can the bug indirectly affect revenue (affects a feature that’s tied to a paid service)?",
        type: "dropdown",
        options: [
            { value: "No", score: 0 },
            { value: "Yes", score: 12 } 
        ]
    },
    {
        title: "How strategically important is the product affected by the bug?",
        type: "radio",
        options: [
            { value: "Not important", score: 0 },
            { value: "Low importance", score: 3 }, 
            { value: "Moderate importance", score: 6 },
            { value: "High importance", score: 12 } 
        ]
    },
    {
        title: "How buggy is the area affected by the bug?",
        type: "radio",
        options: [
            { value: "Not a single bug", score: 0 },
            { value: "A few bugs", score: 3 }, 
            { value: "Buggy", score: 6 }, 
            { value: "Swarmed with bugs", score: 10 } 
        ]
    },
    {
        title: "Will the priority increase if tomorrow all of our users start using the feature?",
        type: "dropdown",
        options: [
            { value: "No", score: 0 },
            { value: "Yes", score: 12 } 
        ]
    },
    {
        title: "How unprofessional does the bug make our product look? 0 = good, 10 = bad",
        type: "slider",
        options: [
            { value: "0", score: 0 }, 
            { value: "1-20", score: 2 },
            { value: "21-40", score: 4 },
            { value: "41-60", score: 6 },
            { value: "61-80", score: 8 },
            { value: "81-100", score: 10 }
            
        ]
    },
    {
        title: "How many users saw the bug but did not complain?",
        type: "radio",
        options: [
            { value: "We don’t know", score: 0 },
            { value: "One", score: 3 }, // Increased to reflect some user impact
            { value: "Few (2-3)", score: 6 }, // Increased for moderate visibility
            { value: "Many (3+)", score: 9 } // Increased to reflect high severity
        ]
    }
];

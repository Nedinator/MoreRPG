(function () {
    // AI Research    
    GDT.addResearchItem({
        id: "mRPG-Advanced-AI",
        name: "Advanced AI".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('AI') > 6;
        },
        category: "AI",
        categoryDisplayName: "AI".localize()
    });
    
    //World Design Research
    GDT.addResearchItem({
        id: "mRPG-Dynamic-Weather",
        name: "Dynamic Weather".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('World Design') > 5;
        },
        category: "World Design",
        categoryDisplayName: "World Design".localize()
    });

    GDT.addResearchItem({
        id: "mRPG-Procedural-Generation",
        name: "Procedural Generation".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('World Design') > 5;
        },
        category: "World Design",
        categoryDisplayName: "World Design".localize()
    });
    
    //Story/Quests Research
    GDT.addResearchItem({
        id: "mRPG-Branching-Storylines",
        name: "Branching Storylines".localize(),
        v: 4,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Story/Quests') > 4;
        },
        category: "Story/Quests",
        categoryDisplayName: "Story/Quests".localize()
    });
    
    GDT.addResearchItem({
        id: "mRPG-Side-Character-Storylines",
        name: "Side Character Storylines".localize(),
        v: 4,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Story/Quests') > 4;
        },
        category: "Story/Quests",
        categoryDisplayName: "Story/Quests".localize()
    });
    
    //Character Design research
    GDT.addResearchItem({
        id: "mRPG-Enhanced-Character-Customization",
        name: "Enhanced Character Customization".localize(),
        v: 4,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Gameplay') > 4;
        },
        category: "Character Design",
        categoryDisplayName: "Character Design".localize()
    });
    
    //Dialogue Research
    GDT.addResearchItem({
        id: "mRPG-Interactive-Dialogue",
        name: "Interactive Dialogue".localize(),
        v: 4,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Dialogs') > 4;
        },
        category: "Dialogs",
        categoryDisplayName: "Dialogs".localize()
    });
    
    GDT.addResearchItem({
        id: "mRPG-Real-time-Combat",
        name: "Real-time Combat".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Gameplay') > 5;
        },
        category: "Gameplay",
        categoryDisplayName: "Gameplay".localize()
    });

    GDT.addResearchItem({
        id: "mRPG-Magic-System",
        name: "Magic System".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Gameplay') > 5 
        },
        category: "Gameplay",
        categoryDisplayName: "Gameplay".localize()
    });

    GDT.addResearchItem({
        id: "mRPG-Enhanced-Magic-System",
        name: "Enhanced Magic System".localize(),
        v: 8,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('Gameplay') > 6 
        },
        category: "Gameplay",
        categoryDisplayName: "Gameplay".localize()
    });
    
    GDT.addResearchItem({
        id: "mRPG-Open-World",
        name: "Open World".localize(),
        v: 6,
        canResearch: function (company) {
            return LevelCalculator.getMissionLevel('World Design') > 6;
        },
        category: "World Design",
        categoryDisplayName: "World Design".localize()
    });
    
	GDT.addTopics([
		{
            id: "mRPG-Medieval-Fantasy",
            name: "Medieval Fantasy".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 1, 1],
            audienceWeightings: [1, 0.9, 0.8],
        },
        {
            id: "mRPG-Post-Apocalyptic",
            name: "Post-Apocalyptic".localize("game topic"),
            genreWeightings: [0.8, 1, 0.9, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.7],
        },
        {
            id: "mRPG-Cyberpunk",
            name: "Cyberpunk".localize("game topic"),
            genreWeightings: [1, 1, 0.8, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Space-Opera",
            name: "Space Opera".localize("game topic"),
            genreWeightings: [1, 0.9, 1, 0.8, 1, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-High-Fantasy",
            name: "High Fantasy".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 1, 1],
            audienceWeightings: [1, 0.9, 0.8],
        },
        {
            id: "mRPG-Steampunk",
            name: "Steampunk".localize("game topic"),
            genreWeightings: [1, 0.9, 1, 0.8, 1, 1],
            audienceWeightings: [0.8, 1, 0.9],
        },
        {
            id: "mRPG-Urban-Fantasy",
            name: "Urban Fantasy".localize("game topic"),
            genreWeightings: [1, 1, 1, 0.8, 1, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Vampires",
            name: "Vampires".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Werewolves",
            name: "Werewolves".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Mythology",
            name: "Mythology".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 1, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Time-Travel",
            name: "Time Travel".localize("game topic"),
            genreWeightings: [0.9, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.7],
        },
        {
            id: "mRPG-Alternate-History",
            name: "Alternate History".localize("game topic"),
            genreWeightings: [0.9, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Pirates",
            name: "Pirates".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.8, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Zombie-Apocalypse",
            name: "Zombie Apocalypse".localize("game topic"),
            genreWeightings: [0.9, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.7],
        },
        {
            id: "mRPG-Martial-Arts",
            name: "Martial Arts".localize("game topic"),
            genreWeightings: [1, 1, 0.8, 1, 0.9, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Underwater-Kingdom",
            name: "Underwater Kingdom".localize("game topic"),
            genreWeightings: [1, 0.9, 1, 1, 0.8, 1],
            audienceWeightings: [0.8, 1, 0.9],
        },
        {
            id: "mRPG-Desert-Wasteland",
            name: "Desert Wasteland".localize("game topic"),
            genreWeightings: [0.9, 1, 1, 0.8, 1, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Sky-Islands",
            name: "Sky Islands".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Superheroes",
            name: "Superheroes".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Magic-School",
            name: "Magic School".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 0.9, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Dystopian-Future",
            name: "Dystopian Future".localize("game topic"),
            genreWeightings: [0.9, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Alien-Invasion",
            name: "Alien Invasion".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Ancient-Civilizations",
            name: "Ancient Civilizations".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Dark-Fantasy",
            name: "Dark Fantasy".localize("game topic"),
            genreWeightings: [1, 1, 1, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Wild-West",
            name: "Wild West".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.8, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Robot-Rebellion",
            name: "Robot Rebellion".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 0.8, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
        {
            id: "mRPG-Mystery",
            name: "Mystery".localize("game topic"),
            genreWeightings: [1, 1, 0.9, 1, 1, 1],
            audienceWeightings: [0.9, 1, 0.8],
        },
        {
            id: "mRPG-Crime-Noir",
            name: "Crime Noir".localize("game topic"),
            genreWeightings: [1, 1, 0.8, 1, 0.9, 1],
            audienceWeightings: [0.8, 1, 0.7],
        },
	]);
})();
export var data = [
    { id: 1, pids: [2], orderId: 1, relationship: "Great Great mainfather", name: "Jessie England", photo: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: '1-11-2020', ddate: 1900 },
    { id: 2, pids: [1], orderId: 2, relationship: "Great Great mainmother", name: "Quinn West", photo: "https://cdn.balkan.app/shared/w60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 3, mid: 1, fid: 2, pids: [6], orderId: 4, relationship: "Great mainfather", name: "Ryan Walmsley", photo: "https://cdn.balkan.app/shared/m60/2.jpg", bdate: 1830, ddate: 1930 },

    { id: 4, pids: [5], relationship: "Great Great mainfather", name: "Ray Crook", photo: "https://cdn.balkan.app/shared/m60/3.jpg", bdate: 1800, ddate: 1900 },
    { id: 5, pids: [4], relationship: "Great Great mainmother", name: "Shiloh Armstrong", photo: "https://cdn.balkan.app/shared/w60/2.jpg", bdate: 1800, ddate: 1900 },
    { id: 6, mid: 4, fid: 5, pids: [3], orderId: 3, relationship: "Great mainmother", name: "Vita Hare", photo: "https://cdn.balkan.app/shared/w60/3.jpg", bdate: 1830, ddate: 1930 },

    { id: 7, mid: 3, fid: 6, pids: [14], relationship: "P.mainfather", gender: "male", name: "Ruby Walker", photo: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1950 },

    { id: 8, pids: [9], relationship: "Great Great mainfather", name: "Courtney Riley", photo: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1800, ddate: 1900 },
    { id: 9, pids: [8], relationship: "Great Great mainmother", name: "Indiana Collett", photo: "https://cdn.balkan.app/shared/w60/5.jpg", bdate: 1800, ddate: 1900 },
    { id: 10, mid: 8, fid: 9, pids: [13], relationship: "Great mainfather", name: "Gill Lyons", photo: "https://cdn.balkan.app/shared/m60/5.jpg", bdate: 1830, ddate: 1930 },

    { id: 11, pids: [12], relationship: "Great Great mainfather", name: "Lacey Beck", photo: "https://cdn.balkan.app/shared/m60/6.jpg", bdate: 1800, ddate: 1900 },
    { id: 12, pids: [11], relationship: "Great Great mainmother", name: "Erin Ridley", photo: "https://cdn.balkan.app/shared/w60/6.jpg", bdate: 1800, ddate: 1900 },
    { id: 13, mid: 11, fid: 12, pids: [10], relationship: "Great mainmother", name: "Emory Wilkins", photo: "https://cdn.balkan.app/shared/w60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 14, mid: 10, fid: 13, pids: [7], relationship: "P.mainmother", gender: "female", name: "Felix Stanley", photo: "https://cdn.balkan.app/shared/w60/8.jpg" },

    { id: 15, mid: 14, fid: 7, pids: [1015, 1016], relationship: "Dad", gender: "male", name: "Ronnie Sheldon", photo: "https://cdn.balkan.app/shared/m60/7.jpg" },


    { id: 101, pids: [102], relationship: "Great Great mainfather", name: "Embry Cheetham", photo: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 102, pids: [101], relationship: "Great Great mainmother", name: "Perry Hilton", photo: "https://cdn.balkan.app/shared/w60/9.jpg", bdate: 1800, ddate: 1900 },
    { id: 103, mid: 101, fid: 102, pids: [106], relationship: "Great mainfather", name: "Ollie Bull", photo: "https://cdn.balkan.app/shared/m60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 104, pids: [105], relationship: "Great Great mainfather", name: "Linsay Pye", photo: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1800, ddate: 1900 },
    { id: 105, pids: [104], relationship: "Great Great mainmother", name: "Flynn Temple", photo: "https://cdn.balkan.app/shared/w60/8.jpg", bdate: 1800, ddate: 1900 },
    { id: 106, mid: 104, fid: 105, pids: [103], relationship: "Great mainmother", name: "Perry Reese", photo: "https://cdn.balkan.app/shared/w60/1.jpg", bdate: 1830, ddate: 1930 },

    { id: 107, mid: 103, fid: 106, pids: [1014], relationship: "P.mainfather", gender: "male", name: "Abby Alford", photo: "https://cdn.balkan.app/shared/m60/3.jpg" },

    { id: 108, pids: [109], relationship: "Great Great mainfather", gender: "male", name: "Sheikh Preston", photo: "https://cdn.balkan.app/shared/m60/4.jpg", bdate: 1800, ddate: 1900 },
    { id: 109, pids: [108], relationship: "Great Great mainmother", gender: "female", name: "Amara Frey", photo: "https://cdn.balkan.app/shared/w60/3.jpg", bdate: 1800, ddate: 1900 },
    { id: 1010, mid: 108, fid: 109, pids: [1013], relationship: "Great mainmother", gender: "female", name: "Caden Mullen", photo: "https://cdn.balkan.app/shared/w60/7.jpg", bdate: 1830, ddate: 1930 },

    { id: 1011, pids: [1012], relationship: "Great Great mainfather", gender: "male", name: "Rosemarie Nelson", photo: "https://cdn.balkan.app/shared/m60/2.jpg", bdate: 1800, ddate: 1900 },
    { id: 1012, pids: [1011], relationship: "Great Great mainmother", gender: "female", name: "Addison Wyatt", photo: "https://cdn.balkan.app/shared/w60/5.jpg", bdate: 1800, ddate: 1900 },
    { id: 1013, mid: 1011, fid: 1012, pids: [1010], relationship: "Great mainfather", gender: "male", name: "Kendal Waters", photo: "https://cdn.balkan.app/shared/m60/1.jpg", bdate: 1830, ddate: 1930 },

    { id: 1014, mid: 1010, fid: 1013, pids: [107], relationship: "P.mainmother", gender: "female", name: "Zion Pacheco", photo: "https://cdn.balkan.app/shared/w60/2.jpg" },

    { id: 1015, mid: 1014, fid: 107, pids: [15], relationship: "Mom", gender: "female", name: "Haiden Fountain", photo: "https://cdn.balkan.app/shared/w60/9.jpg" },

    { id: 2001, mid: 1015, fid: 15, pids: [2007], relationship: "Sister", gender: "female", name: "Shelley Moody", photo: "https://cdn.balkan.app/shared/w60/4.jpg" },
    { id: 2007, pids: [2001], tags: ["left-partner"], relationship: "Spouse", gender: "male", name: "Bobby Carrillo", photo: "https://cdn.balkan.app/shared/m60/1.jpg" },
    { id: 3001, fid: 2007, mid: 2001, tags: ["single_male"], relationship: "Child", gender: "male", name: "Rogan Norris", photo: "https://cdn.balkan.app/shared/m60/2.jpg" },
    { id: 2002, mid: 1015, fid: 15, pids: [2005, 2006], relationship: "Myself", gender: "male", name: "Joni Emerson", photo: "https://cdn.balkan.app/shared/m60/3.jpg" },
    { id: 2005, pids: [2002], fid: 1500, mid: 1501, relationship: "Wife2", gender: "female", name: "Remi Prince", photo: "https://cdn.balkan.app/shared/w30/12.jpg" },
    { id: 3002, fid: 2002, mid: 2005, tags: ["family_single_male"], relationship: "Child", gender: "male", name: "Storm Dougherty", photo: "https://cdn.balkan.app/shared/m10/1.jpg" },
    { id: 2006, pids: [2002], fid: 1502, mid: 1503, relationship: "First Wife", gender: "female", name: "Brittany Nicholls", photo: "https://cdn.balkan.app/shared/w30/13.jpg" },
    { id: 3003, fid: 2002, mid: 2006, pids: [3007], tags: ["main_female_child"], relationship: "Child 1", gender: "female", name: "Cody Costa", photo: "https://cdn.balkan.app/shared/w10/2.jpg" },
    { id: 3007, pids: [3003], tags: ["left-partner"], relationship: "Spouse", gender: "male", name: "Jude Bostock", photo: "https://cdn.balkan.app/shared/w30/14.jpg" },
    { id: 4001, fid: 3007, mid: 3003, tags: ["family_single_female"], relationship: "mainchild", gender: "female", name: "Jamie-Leigh Mcmahon", photo: "https://cdn.balkan.app/shared/w10/3.jpg" },

    { id: 3004, fid: 2002, mid: 2006, pids: [3008], tags: ["main_male_child"], relationship: "Child 2", gender: "male", name: "Deniz Ferry", photo: "https://cdn.balkan.app/shared/m10/2.jpg" },
    { id: 3008, pids: [3004], relationship: "Spouse", gender: "female", name: "Hareem Hyde", photo: "https://cdn.balkan.app/shared/w30/15.jpg" },
    { id: 4002, fid: 3004, mid: 3008, tags: ["family_single_female"], relationship: "mainchild", gender: "female", name: "Jaylen Olson", photo: "https://cdn.balkan.app/shared/w10/4.jpg" },
    { id: 4003, fid: 3004, mid: 3008, tags: ["family_single_male"], relationship: "mainchild", gender: "male", name: "Emaan Green", photo: "https://cdn.balkan.app/shared/m10/3.jpg" },


    { id: 3005, fid: 2002, mid: 2006, tags: ["family_single_female"], relationship: "Child 3", gender: "female", name: "Sana Cervantes", photo: "https://cdn.balkan.app/shared/2.jpg" },

    { id: 2003, mid: 1015, fid: 15, pids: [2008], relationship: "Brother", gender: "male", name: "Blessing Whitaker", photo: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 2008, pids: [2003], relationship: "wife", gender: "female", name: "Eli Pearce", photo: "https://cdn.balkan.app/shared/2.jpg" },

    { id: 1500, pids: [1501], relationship: "Father in Law", gender: "male", name: "Lennie Allan", photo: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 1501, pids: [1500], relationship: "Mother in Law", gender: "female", name: "Kacie Easton", photo: "https://cdn.balkan.app/shared/2.jpg" },
    { id: 1502, pids: [1503], relationship: "Father in Law", gender: "male", name: "Verity Acevedo", photo: "https://cdn.balkan.app/shared/9.jpg" },
    { id: 1503, pids: [1502], relationship: "Mother in Law", gender: "female", name: "Sol Rankin", photo: "https://cdn.balkan.app/shared/2.jpg" },
]
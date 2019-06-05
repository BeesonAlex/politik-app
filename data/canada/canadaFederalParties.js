// import { canadaFederalNdpPlatform } from './ndp/canadaFederalNdpPlatform.js';
// import { canadaFederalLiberalPlatform } from './liberal/canadaFederalLiberalPlatform.js';
// import { canadaFederalConservativePlatform } from './conservative/canadaFederalConservativePlatform.js';
// import { canadaFederalBlocQuebecoisPlatform } from './blocquebecois/canadaFederalBlocQuebecoisPlatform.js';
// import { canadaFederalGreenPlatform } from './green/canadaFederalGreenPlatform.js';
const canadaFederalNdpPlatform = require('./ndp/canadaFederalNdpPlatform.js').canadaFederalNdpPlatform;
const canadaFederalLiberalPlatform = require('./liberal/canadaFederalLiberalPlatform.js').canadaFederalLiberalPlatform;
const canadaFederalConservativePlatform = require('./conservative/canadaFederalConservativePlatform.js').canadaFederalConservativePlatform;
const canadaFederalBlocQuebecoisPlatform = require('./blocquebecois/canadaFederalBlocQuebecoisPlatform.js').canadaFederalBlocQuebecoisPlatform;
const canadaFederalGreenPlatform = require('./green/canadaFederalGreenPlatform.js').canadaFederalGreenPlatform;

let canadaFederalParties = [
        {
            id: "P1", 
            name:"Liberal",
            leader: "Justin Trudeau",
            leaderPortrait: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Justin_Trudeau_in_Lima%2C_Peru_-_2018_%2841507133581%29_%28cropped%29.jpg/220px-Justin_Trudeau_in_Lima%2C_Peru_-_2018_%2841507133581%29_%28cropped%29.jpg", 
            smLogo: "https://www.liberal.ca/wp-content/uploads/2010/06/L-logo-red.png", 
            lgLogo: "https://www.liberal.ca/wp-content/uploads/2010/06/Wordmark-red.png",
            primaryColour: "#d71922",
            secondaryColour: "#FFFFFF",
            seats: 177, 
            position: "Centre-Left", 
            founded: "1867", 
            headquarters: "Ottawa, Ontario", 
            budgetLink: "/data/countries/C1/parties/P1/budget",
            platform: canadaFederalLiberalPlatform,
        },
        {
            id: "P2", 
            name:"Conservative",
            leader: "Andrew Scheer",
            leaderPortrait: "https://www.mykemptvillenow.com/wp-content/uploads/2018/11/Andrew-Scheer-courtesy-Conservative-Party-of-Canada-e1543422278706.jpg", 
            smLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Conservative_Party_of_Canada.svg/1200px-Conservative_Party_of_Canada.svg.png", 
            lgLogo: "https://www.campaignlifecoalition.com/shared/media/editor/image/CPC_logo_350px.gif",
            primaryColour: "#04479d",
            secondaryColour: "#ee2e1f",
            seats: 97, 
            position: "Centre-Right", 
            founded: "2003", 
            headquarters: "Ottawa, Ontario", 
            budgetLink: "/data/countries/C1/parties/P2/budget",
            platform: canadaFederalConservativePlatform,
        },
        {
            id: "P3", 
            name:"NDP",
            leader: "Jagmeet Singh",
            leaderPortrait: "https://www.nationalobserver.com/sites/nationalobserver.com/files/styles/nat_header_full_size/public/img/2017/11/06/171017-ate-jagmeet_singh-5.jpg?itok=wE0N9SV-", 
            smLogo: "https://www.ndp.ca/sites/all/themes/canadandp.themes/canadandp-home/blocks/block--home-footer/images/canadandp-logo-orange-en.svg", 
            lgLogo: "",
            primaryColour: "#f89920",
            secondaryColour: "#FFFFFF",
            seats: 41, 
            position: "Centre-Left", 
            founded: "1961", 
            headquarters: "Ottawa, Ontario", 
            budgetLink: "/data/countries/C1/parties/P3/budget/P1",
            platform: canadaFederalNdpPlatform,
        },
        {
            id: "P4", 
            name:"Bloc Quebecois",
            leader: "Yves-François Blanchet",
            leaderPortrait: "https://www.coupdoeil.info/wp-content/uploads/sites/10/2019/02/bloc31.jpg", 
            smLogo: "https://pbs.twimg.com/profile_images/735567130423394310/r33frJKG.jpg", 
            lgLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/BlocQuebecois_Logo2015.png/460px-BlocQuebecois_Logo2015.png",
            primaryColour: "#0f3a74",
            secondaryColour: "#FFFFFF",
            seats: 10, 
            position: "Centre-Left", 
            founded: "1991", 
            headquarters: "Montreal, Quebec", 
            budgetLink: "/data/countries/C1/parties/P4/budget",
            platform: canadaFederalBlocQuebecoisPlatform,
        },
        {
            id: "P5", 
            name:"Green",
            leader: "Elizabeth May",
            leaderPortrait: "https://pbs.twimg.com/profile_images/539819887707709441/jbUkuD5E.jpeg", 
            smLogo: "https://www.greenparty.ca/sites/default/files/downloads/logos/gpc_logo_web_green_flower.png", 
            lgLogo: "https://www.greenparty.ca/sites/default/files/downloads/logos/gpc_logo_web_green_en.png",
            primaryColour: "#3D9B35",
            secondaryColour: "#FFFFFF",
            seats: 2, 
            position: "Left", 
            founded: "1983", 
            headquarters: "Ottawa, Ontario", 
            budgetLink: "/data/countries/C1/parties/P5/budget",
            platform: canadaFederalGreenPlatform,
        },
]

module.exports = canadaFederalParties;
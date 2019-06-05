const { Router } = require('express');
const countryList = require('../data/countriesList');
const canadaFederalParties = require('../data/canada/canadaFederalParties');
const router = Router();
const url = `http://localhost:8080`;


const getCountryList = (req, res) => {
    res.json(countryList);
}

const getCountry = (req, res) => {
    // search for single country
    const targetCountry = countryList.find(country => country.id == req.params.id);
    
    //was something found?
    if (!targetCountry) {
        res.status(404).json({ error: 'No country with that ID was found' });
    }
    // respond with that country
    res.json(targetCountry);
}


const getPartyList = (req, res) => {
    targetCountry = countryList.find(country => country.id == req.params.id)
    res.json(targetCountry.parties);
}

const getParty = (req, res) => {
    // search for single party
    const targetParty = canadaFederalParties.find(party => party.id == req.params.id);


    //was something found?
    if (!targetParty) {
        res.status(404).json({ error: 'No party with that ID was found' });
    }
    // respond with that hero
    res.json(targetParty);
}


const getRegionsList = (req, res) => {
    targetRegion = targetCountry.subRegionsDetails.find(region => region.id ==req.params.id)
    res.json(targetCountry.subRegionsDetails);
}

const getRegion = (req, res) => {
    // Search for a single country
    targetCountry = countryList.find(country => country.id == "C1")
    
    // search for single video
    const targetRegion = targetCountry.subRegionsDetails.find(region => region.id == req.params.id);

    //was something found?
    if (!targetRegion) {
        res.status(404).json({ error: 'No region with that ID was found' });
    }
    // respond with that hero
    res.json(targetRegion);
}


router.get('/countries', getCountryList);
router.get('/countries/:id', getCountry);
router.get('/countries/:id/parties', getPartyList);
router.get('/countries/:id/parties/:id', getParty);
// router.get('/countries/:id/regions', getRegionsList);
// router.get('/countries/:id/regions/:id', getRegion);
// router.get('/countries/:id/regions/:id/parties', getRegionParties);
// router.get('/countries/:id/regions/:id/parties/:id', getRegion);

module.exports = router;
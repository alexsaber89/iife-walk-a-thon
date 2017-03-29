let WalkAThon = (function() {
    let donorObjectsArray = [];

    return {
        addDonor: function(donor) {
            donorObjectsArray.push(donor);
        },
        getDonors: function() {
            return donorObjectsArray;
        }
    };
})();
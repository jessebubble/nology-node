const theBoys = [ "Homelander", "Starlight", "Queen Maeve", "The Deep", "A-Train", "Black Noir", "Butcher"];

    export const getTheBoys = (req, res) => {
        res.send(theBoys);
    };

    export const getTheBoysById = (req, res) => {
        const id = req.params.id;
        const theBoy = theBoys[id];
        res.send(theBoy);
    };

    export const postTheBoys = (req, res) => {
        const theBoy = req.body;
        theBoys.push(theBoy);
        res.send(`successfully added to the database`);
    };

    export const deleteTheBoys = (req, res) => {
        const id = req.params.id;
        theBoys.splice(id, 1);
        res.send(`successfully deleted from the database`);
    };
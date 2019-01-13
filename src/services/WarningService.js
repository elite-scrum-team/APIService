module.exports = {
    warning: {
        create(warning) {
            return warning;
        },
        retrive(filter) {
            return [];
        },
        retriveOne(filter) {
            return [];
        },
    },
    image: {
        create(image) {
            return image;
        },
    },
    category: {
        retrive() {
            return ['Hole in the road'];
        },
    },
};

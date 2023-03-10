const { golfcourses } = require("./sampleData");
const GolfCourse = require("../models/GolfCourse");

const { Kind } = require("graphql/language");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLScalarType,
} = require("graphql");

const GolfCourseType = new GraphQLObjectType({
  name: "GolfCourse",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: LocationType },
    holes: { type: GraphQLList(HoleType) },
  }),
});

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
  }),
});

const HoleType = new GraphQLObjectType({
  name: "Hole",
  fields: () => ({
    number: { type: GraphQLInt },
    par: { type: GraphQLInt },
    distance: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RooQueryType",
  fields: {
    // Golf course by id
    golfcourse: {
      type: GolfCourseType,
      args: { id: { type: GraphQLID } },
      resolve(parentVal, args) {
        return golfcourses.find((course) => course.id === args.id);
      },
    },
    // All players
    golfcourses: {
      type: new GraphQLList(GolfCourseType),
      resolve(parentVal, args) {
        return golfcourses;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});

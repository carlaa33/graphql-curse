//Named  export - Has a name. Have a many as reeded
//Default export- has no name. you can only have one
const name = "carla";
const message = "Some message frm myMoudle.js";
const location = "Philadelphia";
const getGreeting = (name) => {
  return `Welcome to the course ${name}`;
};

export { message, name, getGreeting, location as default };

module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      time: String,
      place: String, 
      published: Boolean
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Event = mongoose.model("Event", schema);
  return Event;
};

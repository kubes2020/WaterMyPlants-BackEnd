exports.seed = function (knex) {
  return knex('plants')
    .truncate()
    .then(function () {
      return knex('plants').insert([
        {
          id: 1, 
          nickname: "Aloe Vera",
          species: "Aloe Vera",
          h2o_frequency: 14,
          user_id: 1,
          image_url: 'https://images.unsplash.com/photo-1567689265664-1c48de61db0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80'
        },
        {
          id: 2, 
          nickname: "Desert Rose",
          species: "Adenium Obesium",
          h2o_frequency: 7,
          user_id: 1,
          image_url: 'https://images.unsplash.com/photo-1586170112425-3adf1ed0146e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
        },
        {
          id: 3, 
          nickname: "Boston Fern",
          species: "Nephrolepis Exaltata",
          h2o_frequency: 3,
          user_id: 1,
          image_url: 'https://www.plantshop.me/media/product/89280-00-bakie_20190222085524.jpg'
        },
      ]);
    });
};
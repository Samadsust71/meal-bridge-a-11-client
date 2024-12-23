
import { useNavigate } from 'react-router-dom';

const CommunityStories = () => {
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: 'A Kind Gesture Goes a Long Way',
      description:
        'John shared his extra groceries with a struggling family. He says it felt amazing to make a difference in someone’s life.',
      image: 'https://st4.depositphotos.com/22578292/37852/i/450/depositphotos_378528604-stock-photo-food-deliver-asian-man-blue.jpg',
    },
    {
      id: 2,
      title: 'Turning Surplus into Smiles',
      description:
        'Sarah donated fresh produce she couldn’t finish. A local shelter used it to make a meal for 10 people.',
      image: 'https://img.freepik.com/free-photo/person-getting-break-time-office_23-2149272018.jpg',
    },
    {
      id: 3,
      title: 'Gratitude in Every Bite',
      description:
        'Tom, a university student, received a home-cooked meal during a tough week and shared how much it meant to him.',
      image: 'https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303512.jpg',
    },
  ];

  return (
    <section className="bg-[#E2F2E5] py-10">
      <div className="lg:p-10 text-primary">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">Community Stories</h2>
        <p className="text-center mb-8 ">
          Discover the real-life stories of people making a difference through MealBridge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-lg flex flex-col shadow-md overflow-hidden"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-sm mb-4">
                  {story.description.slice(0, 100)}...
                </p>
                <button
                  onClick={() => navigate('/stories')}
                  className="bg-primary-bg text-white px-4 py-2 rounded hover:bg-primary-bg/70"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;

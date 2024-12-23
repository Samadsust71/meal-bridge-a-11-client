
import { useNavigate } from 'react-router-dom';

const CommunityStories = () => {
  const navigate = useNavigate();

  const stories = [
    {
      id: 1,
      title: 'A Kind Gesture Goes a Long Way',
      description:
        'John shared his extra groceries with a struggling family. He says it felt amazing to make a difference in someone’s life.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Turning Surplus into Smiles',
      description:
        'Sarah donated fresh produce she couldn’t finish. A local shelter used it to make a meal for 10 people.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      title: 'Gratitude in Every Bite',
      description:
        'Tom, a university student, received a home-cooked meal during a tough week and shared how much it meant to him.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <section className="bg-base-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Community Stories</h2>
        <p className="text-center mb-8 ">
          Discover the real-life stories of people making a difference through MealBridge.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="bg-base-300 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                <p className="text-sm mb-4">
                  {story.description.slice(0, 100)}...
                </p>
                <button
                  onClick={() => navigate('/stories')}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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

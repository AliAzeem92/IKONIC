import Image from 'next/image';

const CardSection = ({ cards = [] }) => {
  return (
    <div className="w-full md:max-w-[1240px] mx-auto">
      <div className="grid gap-8 md:grid-cols-3 px-6 py-12 mb-24">
        {cards.map((card) => (
          <div key={card.id} className="overflow-hidden rounded-xl group">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={100000000000}
                height={10000000000}
                className="rounded-t-lg w-full hover:scale-110 transition-transform"
              />
            </div>
            <div className="pt-9">
              <div className="flex gap-2 mb-2">
                {card.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`text-[14px] font-normal py-[10px] px-4 rounded-full ${tag.bgColor} tags`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <h3 className="font-medium text-2xl text-gray-800 mb-2 mt-4">
                {card.title}
              </h3>
              <p className="text-lg text-gray-600 mt-4">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;

const Card = ({ event }) => {
  return (
    <div className="card">
      <h2>{event.name}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>
      <a href={event.url} target="_blank" rel="noopener noreferrer" className="card-link">
        Learn More
      </a>
    </div>
  );
};

export default Card;

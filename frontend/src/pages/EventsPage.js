import React from 'react';
import './Page.css';
import './EventsPage.css'; // Specific CSS for EventsPage

function EventsPage() {
  const eventListings = [
    {
      id: 1,
      title: 'Annual Alumni Reunion',
      date: 'October 26, 2025',
      time: '6:00 PM - 10:00 PM',
      location: 'University Grand Hall',
      description: 'Reconnect with classmates, faculty, and friends at our biggest event of the year. Enjoy dinner, live music, and memorable conversations.',
      link: '#',
    },
    {
      id: 2,
      title: 'Webinar: Career Growth in Tech',
      date: 'November 15, 2025',
      time: '2:00 PM - 3:00 PM (Online)',
      location: 'Zoom Webinar',
      description: 'Join industry leaders for an insightful discussion on navigating career paths and achieving growth in the ever-evolving technology sector.',
      link: '#',
    },
    {
      id: 3,
      title: 'Mentorship Program Launch',
      date: 'December 5, 2025',
      time: '4:00 PM - 5:30 PM',
      location: 'Alumni Center Auditorium',
      description: 'Be part of our new mentorship program. Learn how to become a mentor or find a mentor to guide your professional journey.',
      link: '#',
    },
  ];

  return (
    <div className="page-container">
      <h1>Upcoming Events</h1>
      <p>Stay updated on all upcoming alumni events, webinars, workshops, and reunions. Connect with your peers and expand your network through our diverse range of activities.</p>

      <section className="event-listings">
        <h2>Featured Events</h2>
        <div className="event-grid">
          {eventListings.map(event => (
            <div key={event.id} className="event-item">
              <h3>{event.title}</h3>
              <p className="event-date-time">{event.date} | {event.time}</p>
              <p className="event-location">{event.location}</p>
              <p>{event.description}</p>
              <a href={event.link} className="btn btn-primary">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="submit-event">
        <h2>Have an Event to Share?</h2>
        <p>If you are organizing an alumni event, let us know! We'd love to help you promote it to our community.</p>
        <a href="#" className="btn btn-success">Submit Event</a>
      </section>
    </div>
  );
}

export default EventsPage;
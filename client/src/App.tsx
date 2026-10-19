import { Link, Route, Routes } from "react-router-dom";

const upcoming = [
  { sport: "Football", fixture: "Phantom Dragons vs Griffins", time: "Today · 4:30 PM", venue: "Main Ground", status: "UPCOMING" },
  { sport: "Basketball", fixture: "Phoenix Fires vs Wild Warriors", time: "Tomorrow · 2:00 PM", venue: "Indoor Arena", status: "SCHEDULED" },
  { sport: "Volleyball", fixture: "OG Panthers vs Shadow Ocelots", time: "Thu · 5:00 PM", venue: "Court 2", status: "SCHEDULED" },
];

function Dashboard() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><span className="live-dot" /> UAI SPORTS CLUB</span>
          <h1>Every game.<br /><em>One arena.</em></h1>
          <p>Your home for campus sports, tournament fixtures, match results and team standings.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#fixtures">Explore fixtures <span aria-hidden="true">↗</span></a>
            <Link className="button button-quiet" to="/standings">View standings</Link>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="mark-core"><span>UAI</span><strong>SC</strong></div>
          <div className="hero-index">SEASON<br /><strong>2026 / 27</strong></div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Season overview">
        <article className="stat-card"><span>SPORTS</span><strong>08</strong><small>Across the campus</small></article>
        <article className="stat-card"><span>TEAMS</span><strong>08</strong><small>Ready to compete</small></article>
        <article className="stat-card"><span>FIXTURES</span><strong>24</strong><small>Season schedule</small></article>
        <article className="stat-card stat-highlight"><span>SEASON STATUS</span><strong>LIVE<span className="live-dot" /></strong><small>Follow every result</small></article>
      </section>

      <section className="content-section" id="fixtures">
        <div className="section-heading">
          <div><span className="eyebrow">ON THE CALENDAR</span><h2>Upcoming fixtures</h2></div>
          <Link to="/fixtures" className="text-link">All fixtures <span aria-hidden="true">→</span></Link>
        </div>
        <div className="fixture-list">
          {upcoming.map((match) => (
            <article className="fixture-row" key={match.fixture}>
              <div className="sport-icon" aria-hidden="true">{match.sport === "Football" ? "⚽" : match.sport === "Basketball" ? "🏀" : "🏐"}</div>
              <div className="fixture-main"><span className="fixture-sport">{match.sport}</span><h3>{match.fixture}</h3><p>{match.time} <span>·</span> {match.venue}</p></div>
              <span className="status-pill">{match.status}</span>
              <span className="fixture-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
        <p className="demo-note">Starter preview: the figures and fixtures above are sample UI data, not live university records.</p>
      </section>

      <section className="bottom-banner">
        <div><span className="eyebrow">BUILT FOR THE GAME</span><h2>More than a scoreboard.</h2><p>A central place for players, captains and fans to follow campus competition.</p></div>
        <Link className="button button-primary" to="/sports">Discover sports <span aria-hidden="true">↗</span></Link>
      </section>
    </main>
  );
}

function Placeholder({ title, description }: { title: string; description: string }) {
  return <main className="page-shell simple-page"><span className="eyebrow">UAI SPORTS CLUB</span><h1>{title}</h1><p>{description}</p><Link className="button button-primary" to="/">Back to overview</Link></main>;
}

export default function App() {
  return (
    <div className="app">
      <header className="site-header">
        <Link to="/" className="brand" aria-label="UAI Sports Club home">
          <span className="brand-badge">UAI<span>+</span></span>
          <span className="brand-copy"><strong>SPORTS CLUB</strong><small>TOURNAMENT INTELLIGENCE</small></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/sports">Sports</Link><Link to="/teams">Teams</Link><Link to="/fixtures">Fixtures</Link><Link to="/standings">Standings</Link>
        </nav>
        <Link to="/admin" className="admin-link">Admin portal <span aria-hidden="true">↗</span></Link>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sports" element={<Placeholder title="Explore sports" description="The sports directory will list active sports and their competition formats." />} />
        <Route path="/teams" element={<Placeholder title="Meet the teams" description="Team profiles, captains and rosters will be available here." />} />
        <Route path="/fixtures" element={<Placeholder title="Fixtures & results" description="Browse the schedule and follow confirmed match results." />} />
        <Route path="/standings" element={<Placeholder title="League standings" description="Standings will be calculated from confirmed match results." />} />
        <Route path="/admin" element={<Placeholder title="Admin portal" description="Protected management tools will be added after server-side authentication is implemented." />} />
        <Route path="*" element={<Placeholder title="Page not found" description="That page does not exist yet." />} />
      </Routes>
      <footer className="site-footer"><span>UAI SPORTS CLUB</span><span>COMPETE WITH PURPOSE.</span><span>© 2026 UAI</span></footer>
    </div>
  );
}

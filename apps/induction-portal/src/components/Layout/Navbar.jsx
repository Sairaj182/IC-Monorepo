import Image from "next/image";

export default function Navbar() {
  return (
    <header className="navbar--section">
      <button type="button" className="hamburger" aria-label="Open navigation menu">
        <span />
        <span />
        <span />
      </button>

      <div className="name--block">
        <h1>Induction Portal</h1>
      </div>

      <button type="button" className="notification" aria-label="View notifications">
        <Image
          src="/notification.png"
          alt="Notification"
          width={20}
          height={24}
        />
      </button>

      <div className="logo--block">
        <Image
          src="/portal-logo.jpg"
          alt="IC NITP portal logo"
          height={64}
          width={64}
          priority
        />
      </div>
    </header>
  );
}
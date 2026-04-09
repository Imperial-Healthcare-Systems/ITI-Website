"use client"

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917358013585"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = "scale(1.1)"
        el.style.boxShadow = "0 6px 24px rgba(37,211,102,0.6)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = "scale(1)"
        el.style.boxShadow = "0 4px 16px rgba(37,211,102,0.45)"
      }}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="#ffffff"
      >
        <path d="M16.003 3C9.376 3 4 8.373 4 15.003c0 2.15.573 4.233 1.66 6.063L4 29l8.187-1.634A12.94 12.94 0 0 0 16.003 28C22.629 28 28 22.627 28 15.997 28 9.373 22.629 3 16.003 3zm0 23.75a10.71 10.71 0 0 1-5.452-1.487l-.39-.232-4.86.97.993-4.736-.254-.398A10.693 10.693 0 0 1 4.25 15.003C4.25 8.513 9.513 3.25 16.003 3.25c6.487 0 11.747 5.263 11.747 11.747C27.75 21.487 22.49 26.75 16.003 26.75zm6.44-8.27c-.353-.177-2.088-1.03-2.412-1.146-.323-.118-.558-.177-.793.177-.236.353-.912 1.146-1.118 1.382-.206.236-.412.265-.765.088-.353-.177-1.49-.549-2.838-1.75-1.048-.935-1.756-2.09-1.962-2.443-.206-.353-.022-.544.155-.72.159-.158.353-.412.53-.618.177-.206.235-.353.353-.589.118-.235.059-.441-.03-.618-.088-.177-.793-1.912-1.087-2.618-.286-.688-.577-.595-.793-.606-.206-.01-.44-.012-.677-.012-.235 0-.618.088-.941.441-.323.353-1.235 1.206-1.235 2.941 0 1.736 1.265 3.412 1.441 3.647.177.236 2.49 3.8 6.032 5.329.843.364 1.5.582 2.012.745.846.27 1.616.232 2.224.141.678-.102 2.088-.853 2.382-1.677.294-.824.294-1.53.206-1.677-.088-.147-.323-.235-.677-.412z" />
      </svg>
    </a>
  )
}

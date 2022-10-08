
export default function ThirdwebGuideFooter() {
  const url = "https://goblintrum.com";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/logo.png"}
          alt="logo url"
          width={50}
          height={50}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}

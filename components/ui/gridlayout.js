export default function GridLayout({ children }) {
  return (
    <div className="grid  grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 m-5">
      {children}
    </div>
  );
}

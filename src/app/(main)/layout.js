import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";

export default function CommitteeLayout({ children }) {
  return (
    <div className=" relative  w-full h-screen">
      <Navbar />
      <div className="grid grid-rows-[max-content,max-content,min-content]">
        <div>{children}</div>
        <div className=" z-10 -mt-10 bg-black h-80 w-full -bottom-1/4">
          dsadad
        </div>
        <Footer />
      </div>
    </div>
  );
}

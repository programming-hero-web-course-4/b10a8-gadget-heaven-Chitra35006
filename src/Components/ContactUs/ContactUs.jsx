import { useState } from "react";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission (e.g., send the data to an API)
        console.log("Form submitted", formData);
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    const images = [
        { id: 1, src: "https://i.ibb.co/qCVWTnd/IMG-4727.jpg", colSpan: "col-span-1", borderColor: "border-gray-700 border-l-4 border-r-4 rounded-bl-2xl" },
        { id: 2, src: "https://i.ibb.co/6XF56Ln/image.png", colSpan: "col-span-1 row-span-1", borderColor: "border-violet-900 border-b-4xl border-b-4" },
        { id: 3, src: "https://i.ibb.co/9YZJ91T/IMG-4731.jpg", colSpan: "col-span-1", borderColor: "border-white border-l-4 rounded-full border-b-4" },
        { id: 4, src: "https://i.ibb.co/Q6ysSpy/IMG-4730.jpg", colSpan: "col-span-1", borderColor: "border-violet-600 border-r-4 border-b-4" },
        { id: 5, src: "https://i.ibb.co/sKMXCSC/IMG-4729.webp", colSpan: "col-span-2 ", borderColor: "border-purple-500 border-4 rounded-4xl" },
        { id: 6, src: "https://i.ibb.co/NpBWf5G/IMG-4728.webp", colSpan: "col-span-1", borderColor: "border-gray-700 border-l-4 border-b-4 rounded-4xl" },
        { id: 7, src: "https://i.ibb.co/MZHRFbw/IMG-4735.jpg", colSpan: "col-span-1", borderColor: "border-white border-b-4" },
        { id: 8, src: "https://i.ibb.co/JtMJBfZ/IMG-4734.jpg", colSpan: "col-span-1 ", borderColor: "border-gray-700 border-l-4 border-r-4 rounded-bl-2xl" },
        { id: 9, src: "https://i.ibb.co/KGqdLwQ/IMG-4733.jpg", colSpan: "col-span-1", borderColor: "border-violet-900 border-b-4xl border-b-4" },
        { id: 10, src: "https://i.ibb.co/yS5fQVp/IMG-4732.jpg", colSpan: "col-span-1", borderColor: "border-white border-l-4 rounded-full border-b-4" },
        { id: 11, src: "https://i.ibb.co/fCjs1Dv/galaxy-watch4-design-seamless-mo.webp", colSpan: "col-span-1", borderColor: "border-violet-600 border-r-4 border-b-4" },
        
      
      ];
      
    return (
        <div className="flex flex-col md:flex-row gap-4 p-4">
  {/* Left: Compact Gallery */}
  <div className="flex-1 border border-gray-300 bg-gradient-to-r from-purple-200 via-violet-300 to-purple-400 rounded-lg overflow-auto p-2">
    <div className="scale-100 md:scale-90">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((img) => (
          <div
            key={img.id}
            className={`p-1 ${img.colSpan}  ${img.borderColor} rounded-lg`}
          >
            <div className="h-24 md:h-32 overflow-hidden rounded-md">
              <img
                src={img.src}
                alt={`Image ${img.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right: Additional Content */}
  <div className="w-full md:w-[30%] lg:w-[25%] border border-gray-300 rounded-lg p-4">
  <div>
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  placeholder="Your message"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="text-xl md:ml-4 w-full px-4 py-2 rounded-4xl text-white bg-gradient-to-r from-pink-300 via-violet-700 to-violet-900
    hover:from-violet-900 hover:via-violet-700 hover:to-pink-400">
                  Send Message
                </button>
              </div>
            </form>
          </div>
  </div>
</div>



      
      
    );
};

export default ContactUs;
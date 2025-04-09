
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Profile } from './components/Profile';

function App() {
	return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header title={"practice react"} />
      <main className="p-4">
        <Profile
          name={"michelle"}
          title={"React dev"}
          location={"Nairobi, Kenya"}
          avatar={
            "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709174727/catalog/1617812830137020416/lfycur98ciee31lnq1qr.webp"
          }
        />
      </main>
      <Footer message={"Do not use ChatGpt or any AI"} />
    </div>
  );
}

export default App;

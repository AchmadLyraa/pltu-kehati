import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              PT PLN NUSANTARA POWER
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700">
              UNIT PEMBANGKITAN CIRATA
            </h2>
          </header>

          <figure className="mb-12">
            <img
              src="/pln-cirata-power-plant-facility-with-transmission-.jpg"
              alt="Fasilitas PLN Cirata"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </figure>

          <article className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              PLN UP (Pembangkit Tenaga Listrik Pembangkitan) UP Cirata adalah
              salah satu unit pembangkit yang dimiliki oleh PT PLN Nusantara
              Power, anak perusahaan PT PLN (Persero). Pembangkit Listrik Tenaga
              Air (PLTA) Cirata yang berlokasi di Waduk Cirata, Kabupaten
              Purwakarta, Jawa Barat, merupakan salah satu pembangkit listrik
              terbesar di Indonesia dengan kapasitas total 1.008 MW.
            </p>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sejarah Pembangunan PLTA UP Cirata
              </h3>
              <ol className="list-decimal list-inside space-y-6 text-gray-700">
                <li>
                  <strong className="text-lg text-gray-800">
                    Awal Konsep dan Perencanaan (1970-an – 1982-an)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Konsep pembangunan PLTA Cirata mulai digagas pada tahun
                      1970-an untuk mengoptimalkan potensi energi air dari
                      Sungai Citarum.
                    </li>
                    <li>
                      Studi kelayakan dimulai pada 1975 dan selesai 1982,
                      mencakup hidrologi, dampak lingkungan, dan aspek teknis.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Pembangunan PLTA Cirata (1983–1988)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Dimulai 1983 dan selesai 1988 dengan bantuan Japan Bank
                      for International Cooperation (JBIC).
                    </li>
                    <li>
                      Tahap I (1983–1988) kapasitas 504 MW, Tahap II menambah
                      hingga 1.008 MW.
                    </li>
                    <li>
                      Membangun bendungan 125 m, terowongan 11,2 km, serta 8
                      turbin 126 MW.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Pengembangan dan Operasional (Sekarang)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Beroperasi dengan 8 unit pembangkit, total 1.008 MW.
                    </li>
                    <li>
                      Menggunakan teknologi canggih untuk efisiensi dan
                      keandalan.
                    </li>
                    <li>
                      Waduk Cirata juga berfungsi untuk pengendali banjir,
                      irigasi, budidaya ikan, dan pariwisata.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Transformasi Menjadi PLN Nusantara Power
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Pada 2020, PT PLN (Persero) membentuk anak perusahaan PT
                      PLN Nusantara Power yang mengelola aset-aset pembangkit
                      termasuk PLTA Cirata.
                    </li>
                    <li>
                      Transformasi ini bertujuan meningkatkan efisiensi
                      operasional dan pengelolaan aset di seluruh Indonesia.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Peran Saat Ini dan Masa Depan
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      PLTA Cirata jadi salah satu pembangkit andalan Jawa-Bali
                      dengan keandalan tinggi.
                    </li>
                    <li>
                      Ke depan akan tetap mendukung transisi energi bersih
                      nasional.
                    </li>
                    <li>
                      Komitmen pada kelestarian lingkungan lewat konservasi dan
                      monitoring biodiversitas sekitar waduk.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <p className="text-gray-700 leading-relaxed">
              Dengan sejarah panjang dan peran strategisnya, PLTA Cirata tidak
              hanya berkontribusi dalam penyediaan energi listrik, tetapi juga
              dalam pengembangan ekonomi regional dan pelestarian lingkungan.
              Komitmen terhadap operasional yang berkelanjutan dan ramah
              lingkungan menjadikan PLTA Cirata sebagai contoh pembangkit
              listrik yang bertanggung jawab terhadap lingkungan dan masyarakat.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

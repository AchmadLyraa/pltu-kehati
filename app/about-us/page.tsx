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
              UNIT PEMBANGKITAN KALTIM TELUK
            </h2>
          </header>

          <figure className="mb-12">
            <img
              src="/about-us.png"
              alt="Fasilitas PLN Cirata"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </figure>

          <article className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              PT PLN Nusantara Power Unit Pembangkitan (UP) Kaltim Teluk adalah
              salah satu unit pembangkit yang dimiliki oleh PT PLN Nusantara
              Power yang mengoperasikan PLTU Teluk Balikpapan, yang menjadi
              bagian dari subholding PT PLN (Persero). Pembangkit Listrik Tenaga
              Uap (PLTU) Batubara yang berlokasi di Kecamatan Kariangau, Kota
              Balikpapan, Provinsi Kalimantan Timur merupakan salah satu
              pembangkit listrik terbesar di Kalimantan Timur dengan kapasitas
              2x110 MW.
            </p>

            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sejarah Pembangunan PLTU Teluk Balikpapan
              </h3>
              <ol className="list-decimal list-inside space-y-6 text-gray-700">
                <li>
                  <strong className="text-lg text-gray-800">
                    Awal Konsep dan Perencanaan (2005-2010)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      PLTU Teluk Balikpapan masuk pada perencanaan Fast Track
                      Project-1 (FTP-1) atau Proyek Percepatan Diversifikasi
                      Energi (PPDE) tahap 1 berdasarkan Keputusan Presiden No.63
                      Tahun 2007
                    </li>
                    <li>
                      Tanggal 21 Desember 2010 dimulai penandatangan kontrak
                      antara PT PLN (Persero) dengan Kontraktor Sinohydro dan
                      Adhi Karya
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Pembangunan PLTU Teluk Balikpapan (2010-2015)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Fist Pilling (penancapan tiang pancang pertama) yang
                      menandakan dimulainya proyek pada tanggal 04 Februari 2012
                      dan tahun pada tahun 2015 (first syncrone) dengan bantuan
                      Republik Rakyat China dengan Kontraktor Sinohydro dan Adhi
                      Karya{" "}
                    </li>
                    <li>
                      Tahun 2017 PLTU Teluk Balikpapan pertama kali Commercial
                      of Date (COD) dengan masuk ke jaringan 150 Kv interkoneksi
                      Kalimantan.{" "}
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Pengembangan dan Operasional (Sekarang)
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>Beroperasi dengan 2 unit pembangkit, 2x110 MW</li>
                    <li>
                      Menggunakan Boiler Circulating Fluidized Bed CFB yang
                      mampu membakar berbagai jenis bahan bakar padat (seperti
                      batubara kualitas rendah dan biomassa), emisi polutan yang
                      rendah (NOx), serta efisiensi pembakaran yang tinggi
                      karena temperatur rendah dan sirkulasi material bed
                    </li>
                    <li>
                      Berkontirbusi 26% terhadap subsistem Mahakam dan 12%
                      terhadap sistem interkoneksi Kalimantan
                    </li>
                  </ul>
                </li>

                <li>
                  <strong className="text-lg text-gray-800">
                    Transformasi Menjadi PLN Nusantara Power
                  </strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                    <li>
                      Pada tahun 2015 PT Pembangkitan Jawa Bali (PJB) menjadi
                      asset Operator & Maintenance (O&M) di PLTU Teluk
                      Balikpapan dan pada 2023 PT PJB bertransformasi menjadi PT
                      PLN Nusantara Power dan mengambil alih asset PLTU Teluk
                      Balikpapan.
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
                      PLTU jadi salah satu pembangkit andalan (backbone) di
                      Kalimantan Timur dengan keandalan tinggi dengan kontribusi
                      sebesar 26% terhadap subsistem Mahakam dan 12% terhadap
                      sistem interkoneksi Kalimantan
                    </li>
                    <li>
                      Ke depan akan tetap mendukung transisi energi bersih
                      nasional dengan terus berusaha mencapai target co-firing
                      sampai dengan 30%.{" "}
                    </li>
                    <li>
                      Komitmen pada kelestarian lingkungan lewat konservasi dan
                      monitoring biodiversitas di dalam area PLTU Teluk
                      Balikpapan dan area Kota Balikpapan
                    </li>
                  </ul>
                </li>
              </ol>
            </section>

            <p className="text-gray-700 leading-relaxed">
              Dengan sejarah panjang dan peran strategisnya, UP Kaltim Teluk
              tidak hanya berkontribusi dalam penyediaan energi listrik, tetapi
              juga dalam pengembangan ekonomi regional dan pelestarian
              lingkungan. Komitmen terhadap operasional yang berkelanjutan dan
              ramah lingkungan menjadikan UP Kaltim Teluk sebagai contoh
              pembangkit listrik yang bertanggung jawab terhadap lingkungan dan
              masyarakat.
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

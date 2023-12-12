import { Modal } from "antd";

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <Modal
      title="Fatura Yazdır"
      open={isModalOpen}
      footer={false}
      onCancel={() => setIsModalOpen(false)}
      width={800}
    >
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto bg-white px-6 ">
          <article className="overflow-hidden ">
            <div className="logo my-6">
              <h2 className="text-4xl font-bold text-slate-700">LOGO</h2>
            </div>
            <div className="bill-details">
              <div className="grid grid-cols-4 gap-12">
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700 ">Fatura Detayı :</p>
                  <p>Unwrapped</p>
                  <p>Fake Street 123</p>
                  <p>San Javier</p>
                  <p>CA 1234</p>
                </div>
                <div className="text-md text-slate-500">
                  <p className="font-bold text-slate-700 ">Fatura :</p>
                  <p>The Boring Company</p>
                  <p>Tesla Street 007</p>
                  <p>Frisco</p>
                  <p>CA 0000</p>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700 ">
                      Fatura Numarası :
                    </p>
                    <p>00046</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">
                      Veriliş Tarihi :
                    </p>
                    <p>2022-11-21</p>
                  </div>
                </div>
                <div className="text-md text-slate-500">
                  <div>
                    <p className="font-bold text-slate-700 ">Şartlar :</p>
                    <p>10 Gün</p>
                  </div>
                  <div>
                    <p className="font-bold text-slate-700 mt-2">Vade :</p>
                    <p>2023-12-21</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bill-table-area mt-8">
              <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                    >
                      Görsel
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                    >
                      Başlık
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                    >
                      Fiyat
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                    >
                      Adet
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden "
                    >
                      Toplam
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4 pl-4 pr-3"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </Modal>
  );
};

export default PrintBill;

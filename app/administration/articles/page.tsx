import Link from "next/link";

export default async function Articles() {
  
  return (
    <>
      <section className='pl-[335px] pt-[113px] min-h-[1074px]'>
        <div className="p-[50px] pr-0 max-w-[1200px]">
          <h2 className='text-dark font-[800] text-[25px] mb-5'>Articles</h2>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Search For Article</p>
            <input type="text" placeholder="Article Name" className="h-[42px] w-[771px] rounded-[20px] border border-portalText shadow-mainShadow"/>
          </div>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Add New Articles</p>
            <Link href="/administration/articles/add">
              <button type="button" className="w-[200px] h-[42px] bg-portalBG rounded-[20px] shadow-mainShadow text-[16px] font-[600]">Add Article</button>
            </Link>
          </div>
          <div className="mb-6">
            <p className="text-[16px] text-portalText font-[600] mb-3">Article List</p>
            <table className="w-full">
              <thead className="bg-[#F8F7F7] text-left text-[#7D7D7D] font-[600] border-b border-[#7D7D7D]">
                <tr>
                  <th className="py-2 pl-5 w-6/12">Article</th>
                  <th className="py-2 w-3/12">Author</th>
                  <th className="py-2 w-2/12">Date</th>
                  <th className="py-2 w-1/12 text-center">Edit</th>
                </tr>
              </thead>
              <tbody className="text-portalText py-2">
                <tr>
                  <td className="py-2">How to Build a Home</td>
                  <td className="py-2">Jeremy Verhey</td>
                  <td className="py-2">3rd Aug 2023</td>
                  <td className="py-2 text-center">
                    <Link href="/administration/articles/edit/21123">
                      <button type="button" className="bg-warning w-[120px] h-[32px] rounded-[20px] text-[16px] font-[600] text-white shadow-mainShadow">Edit</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

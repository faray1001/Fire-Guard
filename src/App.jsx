import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import { About, Services, ServiceDetail, Contact, NotFound } from './pages/Simple.jsx'
import { Listing, Detail } from './pages/Listing.jsx'
import Emergency from './pages/Emergency.jsx'
import { articles, news } from './data/site.js'
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tentang" element={<About />} />
        <Route path="layanan" element={<Services />} />
        <Route path="layanan/:id" element={<ServiceDetail />} />
        <Route path="edukasi" element={<Listing kind="edukasi" title="Edukasi keselamatan" items={articles} />} />
        <Route path="edukasi/:slug" element={<Detail kind="edukasi" label="Edukasi keselamatan" items={articles} />} />
        <Route path="berita" element={<Listing kind="berita" title="Berita dan pengumuman" items={news} />} />
        <Route path="berita/:slug" element={<Detail kind="berita" label="Berita" items={news} />} />
        <Route path="kontak" element={<Contact />} />
        <Route path="darurat" element={<Emergency />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

import ProductPage from "../components/ProductPage";
import Sitemap from "../sitemap";

export default function Cit1x() {
    if (!Sitemap.forPage('cit1x')) return <></>
    return (
        <ProductPage id={'cit1x'} />
    )
}

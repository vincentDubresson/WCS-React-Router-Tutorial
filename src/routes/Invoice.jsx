import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../datas/Invoices';

export default function Invoice() {
    let { invoiceId } = useParams();
    /* ou  let params = useParams() */

    let location = useLocation();
    let navigate = useNavigate();

    /* Ci-dessous, il ne faut pas oublier le parseInt() car la fonction
        useParams renvoie TOUJOURS une chaîne de caractères */
    let invoice = getInvoice(parseInt(invoiceId, 10));

    return(
        <div style={{ paddingLeft: "1rem" }}>
            <h2>Invoice #{invoiceId}</h2>
            {/* ou <h2 style={{ paddingLeft: "1rem" }}>Invoice #{param.invoiceId}</h2> */}
            <p>{invoice.name}</p>
            <p>total: {invoice.amount}, the {invoice.due}.</p>
            <p>
                <button
                    onClick={() => {
                        deleteInvoice(invoice.number);
                        /* Cette fonction va persister la suppression. */
                        navigate("/invoice" + location.search);
                    }}
                >
                    delete
                </button>
            </p>
        </div>
    );
}
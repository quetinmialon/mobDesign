export async function fetchData(){
    try {
        const response = await fetch('/product.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Erreur lors du fetch des données :', error);
        return null;
    }
}

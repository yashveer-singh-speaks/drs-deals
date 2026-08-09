export default function CatchAllPage({ params }: { params: { slug: string[] } }) {
    return (
        <main className="section-padding" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container">
                <h1 className="hero-title" style={{ color: 'var(--color-champagne-gold)', marginBottom: '16px' }}>In Development</h1>
                <p className="text-body-large" style={{ color: 'var(--color-charcoal)' }}>Please come back later.</p>
                <div style={{ marginTop: '32px' }}>
                    <a href="/" className="btn btn-primary">Return Home</a>
                </div>
            </div>
        </main>
    );
}

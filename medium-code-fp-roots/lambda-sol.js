m => n =>
    (m => n =>
        (p => q => p(q)(p))(
            (m => n =>
                (n => n(x => a => b => b)(a => b => a))(
                    (m => n => n(n => f => x => n(g => h => h(g(f)))(u => x)(u => u))(m))(m)(n),
                ))(m)(n),
        )(
            (m => n =>
                (n => n(x => a => b => b)(a => b => a))(
                    (m => n => n(n => f => x => n(g => h => h(g(f)))(u => x)(u => u))(m))(m)(n),
                ))(n)(m),
        ))(m)(n)((m => n => f => x => n(f)(m(f)(x)))(m)(n))(
        (m => n => n(n => f => x => n(g => h => h(g(f)))(u => x)(u => u))(m))(m)(n),
    );

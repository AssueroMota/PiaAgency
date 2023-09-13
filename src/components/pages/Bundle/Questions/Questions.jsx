import { useState } from 'react';

const questions = [
    {
        title: 'How does your company is expertise in crafting logos and brand identities enhance my business is image?',
        description: 'Our experienced team excels in creating logos and brand identities that leave a lasting impact on your target audience, elevating your business is reputation and recognition.',
        label: 'label1'
    },
    {
        title: 'Can you highlight how your approach ensures my logo truly embodies my brand is essence?',
        description: 'We take a deep dive into understanding your brand is values, vision, and story, translating these elements into a logo that not only represents you but also resonates with your customers.',
        label: 'label2'
    },
    {
        title: 'Could you elaborate on your collaborative process for developing a unique logo and brand identity?',
        description: 'Our collaborative process involves close communication with you at every step. We value your input and insights, ensuring the final logo and brand identity capture your business is personality flawlessly.',
        label: 'label3'
    },
    {
        title: "How does your emphasis on maintaining a consistent brand identity across platforms benefit my business?",
        description: 'We recognize that consistency builds trust. By maintaining a uniform brand identity across all platforms, we help solidify your brand is message and foster a strong and recognizable presence.',
        label: 'label4'
    },
    {
        title: 'Can you elaborate on how a robust brand identity helps my business stand out in a competitive landscape?',
        description: 'Our strategic approach to branding ensures that your business not only stands out but also communicates a unique value proposition, setting you apart from competitors and attracting customers.',
        label: 'label5'
    },
    {
        title: 'Could you explain how your ongoing support ensures the evolution and longevity of my brand identity?',
        description: 'We are committed to your brand is long-term success. Our ongoing support ensures that your brand identity remains fresh, adaptable, and relevant as your business grows and changes.',
        label: 'label6'
    },
    {
        title: 'How do you guarantee my logo is versatility across mediums, and how does it align with your company is values?',
        description: 'We design logos with versatility in mind, making sure they shine across various applications. Our commitment to quality and adaptability reflects our dedication to your brand is success.',
        label: 'label7'
    },
    {
        title: 'In what ways does your team stay updated with design trends to enhance my brand identity?',
        description: 'Our team stays at the forefront of design trends, infusing your brand identity with modern elements that captivate audiences while staying true to your brand is core message and values.',
        label: 'label8'
    }
]

const Questions = () => {
    const [ isLabel, setLabel ] = useState('');

    return (
        <section className="questions" id="questions">
            <div className="questions__col-left">
                <h3 className="title">Frequently asked questions</h3>
                <p className="description">Here are some of our most frequently answered Web Design questions and answers.</p>
            </div>
            <div className="questions__col-right">
                {questions.map((question,indice) => (
                    <div key={indice} className="question-item">
                        <h1 className={`ask ${isLabel === question.label ? 'open' : 'close'}`} onClick={() => {
                            if(question.label === questions[indice].label){
                                setLabel(question.label);
                            }
                        }}>{question.title}</h1>
                        {
                            isLabel === question.label &&
                                <p className="answer">{question.description}</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Questions;
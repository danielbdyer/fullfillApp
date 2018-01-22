'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('posts', [{
      id : '1',
      userId : '1',
      isInternal : true,
      postTitle : 'Choose to have faith in something bigger than yourself.',
      postSubheader : 'Live within the agency that comes from trust.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Visualization and belief in the attainment of desire, or in something greater is a fundamental principle of wealth creation, according to Napoleon Hill.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '2',
      userId : '1',
      isInternal : true,
      postTitle : 'Realize you’ll never have time to do everything.',
      postSubheader : 'Every decision you make has opportunity cost.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Every choice has several others that are not chosen. We are allowed to and get to choose our ultimate ideal.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '3',
      userId : '1',
      isInternal : true,
      postTitle : 'Define what wealth and happiness mean to you.',
      postSubheader : 'By doing it in our own terms, we are able to seize the means to contentment.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "By defining wealth in our own terms, we are able to seize the means to contentment, free from comparison and competition with other people.", "2": "Change the way you feel, think, and act about money. In a free market economy, when you create incredible value for others, anyone can make as much money as they want. Your background, highest level of education, or IQ is irrelevant when it comes to earning it. The bigger the problem you solve, the more the money you make. Expect to make lots of it - what you focus on expands. If you believe there is unlimited abundance, youll attract abundance. Youre not going to be discovered, saved, or made rich by someone else. If you want to be successful, you have to build it yourself.", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '4',
      userId : '1',
      isInternal : true,
      postTitle : 'Stop obsessing about the outcome.',
      postSubheader : 'Research has found that expectations in one’s own ability serves as a better predictor of high performance than expectations about a certain outcome.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "When setting goals, your locus of control should target what you can control. Focus upon your efforts rather than the outcome. Expect optimal performance from yourself. Let the chips fall where they may. The organic output will be the highest quality work. Do what’s right; let consequence follow.", "2": "", "3": "", "4": "", "5": "http://link.springer.com/article/10.1007/BF01173288", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '5',
      userId : '1',
      isInternal : false,
      postTitle : 'Stop consuming caffeine to re-find intrinsic motivation. ',
      postSubheader : 'You don’t perform better with caffeine. Healthy eating, sleeping, and exercise will produce more energy that caffeine ever could.',
      postBody : '{}',
      postUrl : 'https://www.forbes.com/sites/travisbradberry/2012/08/21/caffeine-the-silent-killer-of-emotional-intelligence/#7e35780d118c',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '6',
      userId : '1',
      isInternal : true,
      postTitle : 'Stop consuming refined sugar.',
      postSubheader : 'It has no nutrients – which can lead to crankiness and rash decision-making.',
      postBody : '{}',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '7',
      userId : '1',
      isInternal : true,
      postTitle : 'Fast from all food + caloric beverages for 24h, once a week.',
      postSubheader : 'It may improve well-being in general (digestive activity, mental clarity, physical and mental vigor) and flushes out toxins.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '8',
      userId : '1',
      isInternal : true,
      postTitle : 'Drink 64-100 ounces of water per day.',
      postSubheader : 'Slims the body, healthier skin, better brain functions.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '9',
      userId : '1',
      isInternal : true,
      postTitle : 'Consume 30g of protein, thirty minutes following waking.',
      postSubheader : 'This can promote weight loss, and keeps your blood sugar steady. Ideally, eat 40% of breakfast calories as protein.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "e.g., eggs, turkey bacon, sausage, cottage cheese; water-based protein shake; legumes, greens, nuts, seeds.", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '10',
      userId : '1',
      isInternal : true,
      postTitle : 'Replace warm showers with cold ones.',
      postSubheader : 'Facilitates wellness by changing immune, lymphatic, circulatory, digestive systems. Boosts metabolism. Combats depression via endorphin rush.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "You can start with warm and shift to 90 sec. of cold. Practice slowing breathing, calming down.", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '11',
      userId : '1',
      isInternal : true,
      postTitle : 'Consume a tablespoon of coconut oil once a day.',
      postSubheader : 'Builds HDL (good) cholesterol, blocks LDL (bad) buildup.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Its special fats help burn fat, have energy, maintain healthy weight. Fights aging. Fever-reducer, Anti-inflammatory. Anti-bacterial. Improves memory and cognitive functioning. Coconut oil is also a healthy alternative to caffeine – gives energy without side-effects.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '12',
      userId : '1',
      isInternal : true,
      postTitle : 'Buy a juicer and juice a few times per week.',
      postSubheader : 'Lots of vitamins and nutrients. Protects against oxidative cellular damage, cardiovascular disease, cancer, and various inflammatory diseases. You can either do a cleanse or incorporate it into your regular diet. Try intense greens like kale.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '13',
      userId : '1',
      isInternal : true,
      postTitle : 'Say ‘no’ to people, obligations, requests, opportunities, you’re not interested in.',
      postSubheader : 'At times, it can be hard to turn things down. But if you say no to one thing, you make space to say yes to another.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '14',
      userId : '1',
      isInternal : true,
      postTitle : 'The more you express love, the more people feel love for you.',
      postSubheader : 'Say it 3+ times a day.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '15',
      userId : '1',
      isInternal : true,
      postTitle : 'Genuinely apologize to people you’ve mistreated.',
      postSubheader : 'We often blame mistakes on external factors. To not openly or regularly apologize may keep higher levels of stress and anxiety. Make amends, let go, take ownership of that pent-up energy: it’s not your choice if people forgive you.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '16',
      userId : '1',
      isInternal : true,
      postTitle : 'Make friends with five people who inspire you.',
      postSubheader : 'Their characteristics may dramatically impact you, from the beliefs they hold, to how they pursue their goals, to their money and their health.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '17',
      userId : '1',
      isInternal : true,
      postTitle : 'Fast from the internet for 24h, once a week.',
      postSubheader : 'Challenge addiction. Try out enjoying and exploring reconnection with the things you miss.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "What types of people are you comfortable around? Your comfort level is one of the clearest indicators of your character. It is painful to become uncomfortable with people who have long been your friends, but evolving and longing for more will cause you to begin seeking a different crowd to surround yourself with. Don’t hold yourself back.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '18',
      userId : '1',
      isInternal : true,
      postTitle : 'Track at least one habit/behavior you’re trying to improve.',
      postSubheader : 'When performance is measured, performance improves. When performance is measured and reported, the rate of improvement accelerates.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Tracking is difficult to maintain; if you did it before, you probably quit within a few days of it. But when it is indeed tracked and evaluated, daily, it improves drastically, research and anecdote shows.", "2": "Tracking can be creative! Like taking a photo of everything you eat.", "3": "Accountability to a spreadsheet or app is not the same as accounting to a person—particularly one you trust and respect. If you track it with them, you become aware of it. If you are reporting it to them, you become accountable to it.", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '19',
      userId : '1',
      isInternal : true,
      postTitle : 'Have no more than 3 items on your to-do list each day.',
      postSubheader : 'It feels more attainable, and forces you to simplify down to what\'s really important.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '20',
      userId : '1',
      isInternal : true,
      postTitle : 'Go to bed early and rise early.',
      postSubheader : 'Better cognitive function in planning; anticipation, minimization of problems; improved health and quality of sleep; more optimistic, satisfied, and conscientious.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Get 7+ hours of sleep. More sleep: increased memory, creativity, attention, focus, muscle mass with exercise; decreased inflammation, fat, stimulant dependence, risk of accident, depression.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '21',
      userId : '1',
      isInternal : true,
      postTitle : 'Check email and social media at least 60-90 mins after you wake up...',
      postSubheader : '...instead of immediately.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Don’t put yourself in a reactive state and respond to other people’s agendas. Live life on your own terms, and develop a solid morning routine.", "2": "", "3": "", "4": "", "5": "https://www.amazon.com/Spiritual-Roots-Human-Relations-Stephen/dp/0875797059", "6": "Private victory always precedes public victory, says Stephen Covey." } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '22',
      userId : '1',
      isInternal : true,
      postTitle : 'Adopt a morning routine that sets you off in the right foot.',
      postSubheader : 'Pray, journal, write. Dream about your day, then plan about it. Listen to audiobooks and podcasts when working out. Cold shower.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '23',
      userId : '1',
      isInternal : true,
      postTitle : 'Read one book every week. Try audiobooks.',
      postSubheader : 'Constant learning is better than entertainment.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Give it a shot with 15-30 minutes every morning reading uplifting and instructive information. Listen to audiobooks and podcasts on 1.5x or 2x speed. Try the app ‘Overcast.’", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '24',
      userId : '1',
      isInternal : true,
      postTitle : 'Write in your journal for 5min., per day.',
      postSubheader : 'Only a few sentences or paragraphs at the most.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Clears emotions like therapy does, details and logs your personal history, enhances your creativity, ingrains and enhances learning, brings clarity around the future, accelerates your ability to manifest on your goals, increases your gratitude, and improves your writing skills.", "2": "", "3": "", "4": "", "5": "https://psychcentral.com/lib/the-health-benefits-of-journaling/", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '25',
      userId : '1',
      isInternal : true,
      postTitle : 'Meditate morning, mid-day, and night.',
      postSubheader : 'Breathing, ‘pray,’ visualization, prime with gratitude.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "morning = motivational | afternoon = evaluative & strategic | evening = evaluative & reflective", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '26',
      userId : '1',
      isInternal : true,
      postTitle : 'Do something every day that terrifies you.',
      postSubheader : 'You don’t need courage all the time, just 20sec. at a time.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "The anticipation is usually worse than the event. In most cases, any fears are unfounded.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '27',
      userId : '1',
      isInternal : true,
      postTitle : 'Do something kind for someone else daily.',
      postSubheader : 'It clarifies what really matters in life.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "It’s one of the greatest joys in life, helps connect you deeper with those you help, and humanity in general. ", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '28',
      userId : '1',
      isInternal : true,
      postTitle : 'Give at least one guilt-free hour to relaxation per day.',
      postSubheader : 'Relaxation is crucial for success, like resting between sets.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Pushing yourself constantly and working without good breaks is not sustainable or healthy, and leads to a decrease in productivity and creativity.", "2": "", "3": "", "4": "", "5": "The Pomodoro method", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '29',
      userId : '1',
      isInternal : true,
      postTitle : 'Get married.',
      postSubheader : 'Marriage isn’t about you and the benefit it brings you. It’s about the other person.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Gives a higher purpose for being productive, gets you clear on what’s important in life, highlights flaws and weaknesses, and challenges you to become a better person.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '30',
      userId : '1',
      isInternal : true,
      postTitle : 'Make a bucket list and actively knock items off it.',
      postSubheader : 'Design life around ambitions instead of the other way around.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Begin clearly with the end in mind. Mentalize: 30 days to live. 5 years to live.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '31',
      userId : '1',
      isInternal : true,
      postTitle : 'Decide where you’ll be in five years and get there in two.',
      postSubheader : 'Your self-conception in goal-setting might actually be slowing you down.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "", "2": "", "3": "", "4": "Tim Ferriss doesn’t have five or ten year goals. He works on what he calls experiments for 6-12 weeks (2-4 mo.) and if they do well, the possibilities are endless. He doesn’t have to get fixated on one thing.", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '32',
      userId : '1',
      isInternal : true,
      postTitle : 'Remove all non-essentials from your life (start with your closet).',
      postSubheader : 'They are dormant value to be redeemed.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Most possessions and clothes you have, you don’t use. They passively cling to life. Being rid of useless, untapped, underutilized resources injects you with motivation and clarity.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '33',
      userId : '1',
      isInternal : true,
      postTitle : 'Save 10 percent or more of your income.',
      postSubheader : 'Pay yourself long-run first.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Paying yourself first is a core principle of wealth creation: most people pay other people first, and live above their means. Spend less than you earn, and you’ll be financially free.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '34',
      userId : '1',
      isInternal : true,
      postTitle : 'Tithe or give 10 percent of your income away.',
      postSubheader : 'The world gives to the givers and takes from the takers.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "A healthy, generous, wise, regular gift helps develop traits needed for earning potential and radical wealth creation. “The world gives to the givers and takes from the takers,” according to Joe Polish.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '35',
      userId : '1',
      isInternal : true,
      postTitle : 'Buy a small place rather than rent (if you live in a small city especially.)',
      postSubheader : 'You earn a lot of equity paying down your mortgage.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "You earn a lot of equity paying down your mortgage: you’re not just spending to live.", "2": "You’re living for free while saving.", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '36',
      userId : '1',
      isInternal : true,
      postTitle : 'Make a few radical changes to your life each year.',
      postSubheader : 'Change pulls you from your comfort zone, which is exactly what you need.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Novelty is an antidote to monotony. Reinvent yourself, your pursuits, and your relationships. Plan on changing your whole life for the better every year.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '37',
      userId : '1',
      isInternal : true,
      postTitle : 'Invest only in industries you are informed about.',
      postSubheader : 'No one else cares about your success more than you do.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Have the understanding to make an informed decision, and don’t put the trust in someone else’s hands.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '38',
      userId : '1',
      isInternal : true,
      postTitle : 'Create an automated income source that takes care of the fundamentals.',
      postSubheader : 'You can absolutely put a business in place that runs 24/7, even while you’re sleeping.',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "Work for a few years like no one will so you can live the rest of your life like no one else can.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id : '39',
      userId : '1',
      isInternal : true,
      postTitle : 'Free up your time and energy by creating multiple income streams.',
      postSubheader : '(The more the better!)',
      postBody : '{ "paragraphheader": { "1": "Why To Do This", "2": "Getting Started", "3": "Getting Better", "4": "Challenge Yourself", "5": "Resources", "6": "Personal Experiences" }, "paragraphbody": { "1": "What if you were getting income from 5 or 10 different places every month, and some of those were automated? With a few short years of intentional and focused work, you can have several income streams.", "2": "", "3": "", "4": "", "5": "", "6": "" } }',
      postUrl : '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down : function (queryInterface, Sequelize) {
    queryInterface.bulkDelete("posts", null, {});
  }
};

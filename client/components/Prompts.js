const prompts = {
  prompt1: {
    prompt:
      "Illustrate a comprehensive poster focused on diabetes awareness and prevention strategies tailored for urban communities. The center of the image should feature a diverse group of individuals participating in a community health fair, with booths providing information on nutrition, exercise, and blood sugar monitoring. On one side, depict an engaging cooking demonstration led by a nutritionist showcasing how to prepare healthy meals using local ingredients, surrounded by colorful produce and cooking utensils. On the other side, include a fitness coach leading a group exercise session, with participants of various ages and abilities actively engaged in fun activities. Integrate visual statistics on diabetes prevalence in urban areas, with phrases like '1 in 10 adults has diabetes' prominently displayed. Include educational materials, such as pamphlets and infographics illustrating the risks of obesity and unhealthy diets, along with tips for maintaining a healthy lifestyle. Incorporate an AI health tracker interface displayed on smartphones and smartwatches that provides real-time feedback on physical activity and dietary choices, encouraging users to make healthier decisions. Use bright and bold colors to convey a sense of energy and community spirit, making the poster an inviting resource for health awareness.",
    imagePath: "/image1.png",
    generatedBy: "Studyaid",
  },
  prompt2: {
    prompt:
      "Create a visually rich educational poster aimed at promoting nutrition education in urban schools. The poster should depict a lively school cafeteria scene, bustling with diverse children of various backgrounds happily engaging in healthy eating. Illustrate a colorful array of fruits and vegetables displayed on the cafeteria counter, with AI nutritional guidance projected above them, showcasing fun facts like 'Eating the rainbow boosts your health!' and 'Choose whole grains for better energy!'. On one side, show children participating in an interactive cooking class, preparing healthy meals under the guidance of a cheerful AI cooking assistant, which displays easy-to-follow recipes on a screen. On the other side, depict kids at a salad bar, excitedly customizing their meals with fresh ingredients, while a teacher explains the importance of balanced diets. Incorporate eye-catching infographics around the edges, presenting statistics such as 'Children who eat healthy meals perform better academically' and tips like 'Drink water instead of sugary drinks.' Use bright, inviting colors throughout, with a warm atmosphere created by sunlight streaming through cafeteria windows, fostering a sense of community and enthusiasm around healthy eating.",
    imagePath: "/image2.png",
    generatedBy: "Studyaid",
  },
  prompt3: {
    prompt:
      "Create an expansive mural that illustrates the importance of urban green spaces for community health and well-being. The mural should be visually divided into multiple sections, showcasing various activities that take place in green spaces, such as parks and community gardens. In one section, depict families enjoying a picnic on a sunny day, surrounded by vibrant flowers and trees. In another, illustrate individuals participating in group fitness classes, showcasing the positive impacts of exercise in natural settings. Include children playing on playgrounds, emphasizing the joy of outdoor activity. Integrate educational messages throughout the mural, such as 'Spending time in nature reduces stress' and 'Green spaces promote physical and mental health,' presented in bright, bold lettering. Feature AI technology in the form of interactive kiosks where visitors can learn about the health benefits of each activity. Use a rich, colorful palette that includes greens, blues, and yellows to create a lively atmosphere, with bright, natural lighting enhancing the beauty of the scene and highlighting the vibrancy of life in urban green spaces. The mural should serve as a visual celebration of the essential role these spaces play in fostering community health.",
    imagePath: "/image3.png",
    generatedBy: "Studyaid",
  },
  // prompt4: {
  //   prompt: "Design a powerful visual aid that exposes the harsh realities of fast food consumption in urban settings. The central image should be a split-screen comparison: on one side, a vibrant, colorful fast-food advertisement showcasing mouthwatering burgers and fries; on the other, a stark, grim reality of a local fast-food outlet littered with trash and overflowing garbage bins. In the foreground, illustrate a group of diverse individuals eagerly consuming fast food, their expressions reflecting temporary satisfaction but underlying health concerns, such as obesity and diabetes. Above them, overlay text that reads, 'Fast food: Convenience or Consequence?' in bold, stark lettering. Incorporate visual statistics around the edges, such as 'Over 40% of adults in urban areas are obese,' and 'Fast food consumption increases the risk of chronic diseases.' Use a color palette that contrasts the vibrant allure of fast food with dull, unhealthy tones like gray and brown to symbolize the negative health effects. Highlight the hidden costs of fast food by depicting a shadowy figure of a doctor in the background, holding a clipboard with rising healthcare statistics related to fast food-related illnesses. The overall lighting should be harsh and clinical, creating a sense of urgency and drawing attention to the consequences of dietary choices in urban environments.",
  //   imagePath: "/image4.png",
  //   generatedBy: "Studyaid",
  // },
  prompt5: {
    prompt:
      "Create an impactful visual aid that illustrates the severe impact of air pollution on respiratory health in urban environments. The image should feature a busy city street filled with smog and dark clouds, with pedestrians wearing masks and coughing, showcasing the daily struggle against poor air quality. In the foreground, depict a child holding their inhaler, looking up at the sky with a worried expression, emphasizing the vulnerability of children to air pollution. Incorporate stark statistics around the edges, such as '7 million deaths annually linked to air pollution' and 'Asthma rates have increased by 40% in urban areas,' presented in bold, alarming typography. Include visual elements like factories emitting smoke, vehicles in gridlock contributing to pollution, and the hidden costs of healthcare bills represented as bills fluttering in the wind. The contrast between the chaotic urban environment and the individual suffering should evoke empathy and urgency. Use a muted color palette dominated by grays and browns to emphasize the bleakness of air quality, with sharp, bright colors highlighting the statistics and health impacts. The lighting should be dim and overcast, creating a gloomy atmosphere that reflects the seriousness of the issue. Style: Harsh Realism | Medium: Digital Painting | Mood: Somber and urgent | Lighting: Dim and oppressive, capturing the essence of pollution and its effects on health.",
    imagePath: "/image5.png",
    generatedBy: "Studyaid",
  },
  prompt6: {
    prompt:
      "Create a powerful visual aid that illustrates the mental health impact of urban isolation. The central image should depict a busy city street, with individuals walking past each other but not interacting, surrounded by social media notifications floating in the air. In the foreground, highlight a lonely figure sitting on a park bench, looking at their phone with a pained expression. Overlay the image with statistics such as 'Over 30% of urban residents report feelings of loneliness' and 'Social isolation can increase the risk of mental health issues by 50%,' presented in bold, alarming typography. Incorporate visual elements like shadowy figures representing unrecognized struggles and images of community connection initiatives depicted in softer colors to symbolize hope and change. Use a muted color palette dominated by grays and blues to evoke feelings of isolation, contrasting with brighter colors representing community engagement. The lighting should be dim and melancholic, enhancing the sense of loneliness in urban environments., Style: Emotional and Thought-Provoking | Medium: Mixed Media | Mood: Somber and reflective | Lighting: Dim and melancholic, creating an atmosphere of isolation.",
    imagePath: "/image6.png",
    generatedBy: "Studyaid",
  },
  prompt7: {
    prompt:
      "Design a compelling visual aid that addresses the challenge of food insecurity in urban settings. The central image should depict a food pantry bustling with activity, where individuals are receiving assistance and support. In the foreground, illustrate a family with children receiving food packages, their expressions showing relief and gratitude. Overlay the image with alarming statistics such as '1 in 6 urban residents experience food insecurity' and 'Food deserts increase the risk of chronic diseases,' presented in bold, attention-grabbing fonts. Incorporate visual elements like fresh produce and community gardens in the background, emphasizing efforts to combat food insecurity. Surround the scene with imagery of nutritional education programs and cooking classes depicted in brighter, more hopeful colors to symbolize empowerment and community resilience. Use a warm color palette dominated by greens and yellows to evoke feelings of hope and community spirit, creating an inviting atmosphere that encourages participation. The lighting should be bright and welcoming, enhancing the positive message of support and assistance. Style: Inspirational and Uplifting | Medium: Digital Illustration | Mood: Positive and empowering | Lighting: Warm and inviting, creating a sense of community and support.",
    imagePath: "/image7.png",
    generatedBy: "Studyaid",
  },
  prompt8: {
    prompt:
      "Design a compelling visual campaign centered on the importance of mental health awareness in urban communities. The image should portray a vibrant cityscape during a community health fair focused on mental wellness. In the foreground, feature a diverse group of individuals participating in workshops and discussions about mental health, with a large banner overhead that reads 'Mental Health Matters!' in bold, inviting letters. Include various booths offering resources like stress relief techniques, mindfulness practices, and support group sign-ups, each adorned with colorful decorations to create a festive atmosphere. Illustrate people engaging in activities like yoga, art therapy, and meditation, showcasing the variety of options available for mental health support. Incorporate AI elements, such as a mobile app displayed on a smartphone, featuring mindfulness reminders and coping strategies, prominently displayed to suggest the integration of technology in mental health care. Surround the scene with educational statistics, like '1 in 5 adults experience mental illness,' creatively integrated into the design. Utilize a warm color palette with soft pastels to evoke feelings of safety and community, with gentle lighting that mimics a late afternoon sun, casting a golden glow over the entire fair, symbolizing hope and togetherness. Style: Community-Focused and Uplifting | Medium: Digital Art | Mood: Warm and supportive | Lighting: Soft, golden hour light, creating an inviting and reassuring ambiance throughout the scene.",
    imagePath: "/image8.png",
    generatedBy: "Studyaid",
  },
  prompt9: {
    prompt:
      "Create an educational infographic detailing common infectious diseases in urban environments and prevention strategies. The layout features illustrations of bacteria and viruses in vibrant colors, along with images of people practicing good hygiene, such as handwashing and vaccination. Include a timeline showcasing how quickly infections can spread in crowded areas. Add statistical data highlighting the importance of vaccination and public health initiatives. The overall tone should be informative, with the headline 'Protect Yourself: Understand Infectious Diseases.' Use clear icons and text to make the information easily digestible. Style: Educational | Medium: Vector Art | Mood: Informative | Lighting: Balanced, focusing on clarity",
    imagePath: "/image9.png",
    generatedBy: "Studyaid",
  },
  prompt10: {
    prompt:
      "Create a futuristic illustration showing how AI technology is transforming urban health management. In the center, depict a smart city hub where AI monitors health data from wearable devices worn by citizens. Surround the hub with holographic screens displaying real-time health alerts, health improvement suggestions, and local healthcare resources. Include a diverse group of people interacting with the AI interface, showcasing its accessibility and user-friendliness. The slogan reads, 'AI for Health: Empowering Urban Lives.' Style: Futuristic | Medium: 3D Rendering | Mood: Optimistic | Lighting: Neon and cool tones, evoking a sense of innovation",
    imagePath: "/image10.png",
    generatedBy: "Studyaid",
  },
  prompt11: {
    prompt:
      "Imagine an AR installation at a farmers' market, where visitors can scan fresh produce to view its nutrient profile and carbon footprint. As they walk through the market, an AR guide directs them to stalls that offer locally grown, affordable options to combat food insecurity and unhealthy diets in food deserts. Each produce item shows its potential health benefits, while also highlighting barriers like limited availability in low-income neighborhoods. Users can compare data on commonly consumed but nutrient-poor foods with healthy alternatives, and the AR guide suggests simple, affordable recipes. Natural lighting and realistic textures make each item appear vivid, fostering a tactile, informative experience that educates visitors on making nutritious choices despite urban food access challenges.",
    imagePath: "/image11.png",
    generatedBy: "Studyaid",
  },
  prompt12: {
    prompt:
      "Envision a VR experience installed in a city library, simulating urban environments with varying levels of green space and noise. Participants can explore busy streets, open parks, and tranquil waterfronts, observing their impact on heart rate and breathing patterns as measured by wearable devices. The VR simulation pauses periodically, offering guided breathing exercises and relaxation techniques, while explaining the positive effects these techniques can have in high-stress urban settings. An AI narrator provides insights on how urban design impacts stress, and how more green spaces can reduce mental health strain for city dwellers. Soft ambient sounds and calming visuals encourage users to adopt these relaxation practices into their daily routines, with feedback loops showing reductions in stress indicators in real time.",
    imagePath: "/image12.png",
    generatedBy: "Studyaid",
  },
  prompt13: {
    prompt:
      "Set up an AI-powered interactive mural on the side of a community center, where passersby can approach and answer questions on their lifestyle choices. The mural responds by animating a personalized scene that visualizes the health impact of their choices over time—like vivid imagery of nutritious foods growing into trees or fast food leaving gray shadows across the landscape. The mural suggests healthier alternatives based on the user's input, adding simple, achievable steps toward improved health, like a water bottle filling as hydration levels increase or footsteps along a track showing steps taken. The real-time, animated changes to the mural encourage people to reflect on everyday choices, with the lively urban setting underscoring the connection between individual decisions and the city's overall health.",
    imagePath: "/image13.png",
    generatedBy: "Studyaid",
  },
  prompt14: {
    prompt:
      "Imagine an augmented reality experience installed in a busy urban park where individuals walk through various 'air zones' that visually display the level of pollution in different areas of the city. As participants move, the colors around them change from green (low pollution) to red (high pollution), with data overlaid on how the current pollution level could impact respiratory health. An AI-powered voice explains the health implications, such as increased risks of asthma or cardiovascular issues, as well as how lifestyle adjustments and city policy could reduce exposure. Real-time, localized air quality data from sensors adds to the immersive experience, giving residents firsthand insight into their daily environment's health risks. Natural daylight simulates changing times of the day to show how pollution patterns vary based on traffic and weather, with a dusk simulation to emphasize the 'peak pollution' hours",
    imagePath: "/image14.png",
    generatedBy: "Studyaid",
  },
  prompt15: {
    prompt:
      "Set up an AI-powered fitness trail in a city park where residents can check in at various points along the route to access personalized health data. Participants wear trackers that monitor heart rate, pace, and distance, while AR markers at each station offer specific exercises or tips based on their tracked data. AI stations provide real-time feedback, like suggesting slower movements to protect joints or offering alternative exercises for those at risk of injury. Trail sections simulate different urban terrains, emphasizing how varied physical activities contribute to comprehensive fitness. The trail’s dynamic lighting adapts based on the user’s time of day and pace, offering a motivational experience that encourages them to integrate physical activity into daily routines. Each milestone achieved on the trail unlocks insights into health benefits, including lowered blood pressure and enhanced cardiovascular health, motivating users to reach their fitness goals.",
    imagePath: "/image15.png",
    generatedBy: "Studyaid",
  },
  prompt16: {
    prompt:
      "Place soundproof booths across high-traffic areas in a city, where people can step inside to experience an “echo” of their future cardiovascular health based on lifestyle choices. Upon entering, the booth uses AI to analyze heart rate and estimate cardiovascular risks using simple biometric data, such as pulse and breathing rate. Participants are then immersed in an audio simulation where, depending on their cardiovascular health score, they hear sounds of heavy breathing, irregular heartbeats, or calm, steady rhythms representing a healthy heart. A soothing AI narrator explains the effects of stress, lack of exercise, and diet on long-term heart health. Participants are given options on-screen to select lifestyle changes, with each choice leading to a recalibration of the sounds. Upon exit, users receive a small card with personalized tips on stress reduction and heart health, encouraging healthier choices. Ambient red and blue lighting inside the booth reflects the intensity of simulated heart sounds, enhancing the experience’s impact.",
    imagePath: "/image16.png",
    generatedBy: "Studyaid",
  },
  prompt17: {
    prompt:
      "Install augmented reality mirrors at public places like malls and city squares, programmed to show users how smoking affects their body over time. When a person steps in front of the mirror, the AR overlay simulates the gradual physical effects of smoking—skin aging, lung deterioration, and yellowing teeth, alongside animations of internal organs affected by nicotine and tar. A notification window appears beside the reflection, presenting facts like 'Smokers have 10 times higher risk of lung cancer.' Users can tap an on-screen button to “rewind” the visual effects to a healthy baseline, allowing them to compare before and after effects. When a non-smoker steps in, they are shown a healthy version of their reflection with tips on maintaining lung health. Dim, clinical lighting around the mirror emphasizes the severity of the visual changes, creating a lasting impression on viewers.",
    imagePath: "/image17.png",
    generatedBy: "Studyaid",
  },
  prompt18: {
    prompt:
      "Develop a virtual reality simulation that guides users through a typical urban apartment, pointing out common sources of indoor air pollution and their health impacts. Upon putting on the VR headset, users navigate through different rooms, where AI avatars highlight pollutants like mold spores in damp areas, VOCs from cleaning products, and allergens from soft furniture. Each pollutant has a hovering info bubble displaying potential health risks, like “Increased risk of asthma,” and suggesting simple preventative measures, such as “Ventilate rooms regularly.” Users are shown the cumulative health impact if no actions are taken, with subtle changes like a visual “haze” that develops over time in the simulation. The experience uses warm, home-like lighting but gradually becomes dim and hazy as pollutants accumulate, emphasizing the invisible dangers present in everyday environments.",
    imagePath: "/image18.png",
    generatedBy: "Studyaid",
  },
  prompt19: {
    prompt:
      "Create a mobile holographic exhibit that travels between public spaces, displaying life-sized 3D projections of individuals sharing their personal stories of mental health challenges. Each hologram reflects diverse age groups, professions, and backgrounds, breaking down stigmas by showing that mental health struggles are universal. As viewers approach, the holograms react, making eye contact and speaking directly to the audience. Text pop-ups beside each hologram provide facts about common mental health conditions like anxiety and depression and list symptoms. Participants are invited to tap on virtual buttons to Ask the holograms questions such as 'How did you find help?' or 'What coping methods worked for you?'' Each story highlights the power of seeking help and gives practical advice. Soft, diffused lighting in the holographic projection area adds a calm, respectful ambiance to the experience, which emphasizes empathy and support.",
    imagePath: "/image19.png",
    generatedBy: "Studyaid",
  },
  prompt20: {
    prompt:
      "Design sections of sidewalk in bustling city areas to double as interactive health monitoring stations that highlight the benefits of real-time health tracking for high-stress urban lifestyles. Users step onto designated sidewalk areas embedded with sensors that detect basic vitals like heart rate and gait stability, simulating the power of wearable health technology in a public, accessible way. The sensors flash different colors on the ground: green for healthy readings, yellow for moderate, and red for potentially concerning indicators. A nearby screen provides feedback on how vitals change depending on walking speed, posture, or stress levels, along with insights like 'High heart rate detected: Consider a rest or a few deep breaths.' Real-time prompts on the screen suggest stretching or slow breathing, showcasing how simple actions can quickly reduce stress. The sidewalks feature ambient LED lighting that reflects the crowd’s general health metrics, creating a shared visual of community health awareness while inspiring collective wellness.",
    imagePath: "/image20.png",
    generatedBy: "Studyaid",
  },
  prompt21: {
    prompt:
      "A crowded subway platform, where people in professional attire wait for the train, most of them lost in their own worlds or staring at their phones. In the midst of the crowd, one person stands visibly distressed, eyes downcast, clutching their phone tightly. Their screen shows an AI message: 'Do you need help? Talk to someone now.' Above their head, faint digital text icons offer options like 'Crisis Counselor' and 'Local Support Groups,' in subtle yet comforting colors. Some nearby people begin to notice, their expressions softening with empathy. The subway environment is gritty and dimly lit, with harsh fluorescent lights casting deep shadows, contrasting with the gentle glow from the AI’s supportive message. This powerful visual highlights the potential for AI to provide essential mental health support, even in the most isolating of crowded spaces.",
    imagePath: "/image21.jpg",
    generatedBy: "Leonardo AI",
  },
  prompt22: {
    prompt:
      "Design an informative poster that visually communicates the relationship between urban pollution and respiratory health. The central visual should be a split image of a bustling city: on one side, a clear blue sky above a thriving neighborhood, with families walking, biking, and enjoying outdoor activities in a clean environment. On the opposite side, depict the same neighborhood under heavy smog, with dark clouds looming overhead, cars emitting fumes, and individuals coughing or wearing masks.Incorporate visual statistics, such as 'Air pollution contributes to 7 million deaths annually' displayed prominently, along with infographics illustrating the harmful effects of specific pollutants like PM2.5 and NO2 on lung health. Include imagery of children playing outside, contrasting the joy of healthy outdoor activities with the discomfort and danger posed by pollution. Integrate AI elements by showing an app on a smartphone that displays real-time air quality data and alerts, with phrases like 'Air Quality Alert: Stay Indoors!' in bold letters. The overall color scheme should utilize earthy tones on the clean side, transitioning to dark, muted colors on the polluted side, emphasizing the stark difference in air quality.Style: Educational Infographic | Medium: Digital Illustration | Mood: Serious and informative | Lighting: Clear and bright on the healthy side, dark and shadowy on the polluted side.",
    imagePath: "/image25.jpg",
    generatedBy: "Studyaid",
  },
};

export default prompts;
